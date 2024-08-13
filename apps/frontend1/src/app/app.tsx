import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./app.scss";

// Import the Stencil component
import { AssessmentComponent } from 'ui-components-react';

// Constants for Contentful API
const SPACE_ID = "h3n75a0xb6vi";
const ACCESS_TOKEN = "3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

// GraphQL query to get assessment data
const GET_ASSESSMENT_DATA = gql`
  query GetAssessment {
    assessmentCollection {
      items {
        name
        slug
        intro {
          json
        }
        questions
        resultsIntro {
          json
        }
      }
    }
  }
`;

// Component to fetch and display assessment data
const AssessmentData = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENT_DATA);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assessment: {error.message}</div>;

  const assessment = data.assessmentCollection.items[0];
  const questions = assessment.questions.pages;
  const resultsIntro = documentToReactComponents(assessment.resultsIntro.json);

  return (
    <AssessmentComponent
      questions={questions}
      // resultsIntro={resultsIntro}
      showProgress={true}
    />
  );
};


// Main App component
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <AssessmentData />
      </div>
    </ApolloProvider>
  );
};

export default App;
