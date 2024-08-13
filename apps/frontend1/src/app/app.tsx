import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

// Component to display the assessment data
const AssessmentData = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENT_DATA);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assessment</div>;

  const assessment = data.assessmentCollection.items[0];

  return (
    <div>
      <h1>{assessment.name}</h1>
      <div>{documentToReactComponents(assessment.intro.json)}</div>
      <hr />
      {assessment.questions.pages.map((page: any, pageIndex: number) => (
        <div key={pageIndex}>
          <h2>{page.name}</h2>
          {page.elements.map((element: any, elementIndex: number) => (
            <div key={elementIndex}>
              <h3>{element.title}</h3>
              {element.type === "radiogroup" && (
                <div>
                  {element.choices.map((choice: string, choiceIndex: number) => (
                    <div key={choiceIndex}>
                      <input type="radio" id={`${element.name}-${choiceIndex}`} name={element.name} value={choice} />
                      <label htmlFor={`${element.name}-${choiceIndex}`}>{choice}</label>
                    </div>
                  ))}
                </div>
              )}
              {element.type === "checkbox" && (
                <div>
                  {element.choices.map((choice: string, choiceIndex: number) => (
                    <div key={choiceIndex}>
                      <input type="checkbox" id={`${element.name}-${choiceIndex}`} name={element.name} value={choice} />
                      <label htmlFor={`${element.name}-${choiceIndex}`}>{choice}</label>
                    </div>
                  ))}
                </div>
              )}
              {element.type === "text" && (
                <div>
                  <input type="text" id={element.name} name={element.name} required={element.isRequired} />
                </div>
              )}
              {element.type === "boolean" && (
                <div>
                  <div>
                    <input type="radio" id={`${element.name}-true`} name={element.name} value="true" />
                    <label htmlFor={`${element.name}-true`}>{element.labelTrue || "Yes"}</label>
                  </div>
                  <div>
                    <input type="radio" id={`${element.name}-false`} name={element.name} value="false" />
                    <label htmlFor={`${element.name}-false`}>{element.labelFalse || "No"}</label>
                  </div>
                </div>
              )}
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
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
