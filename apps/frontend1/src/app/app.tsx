import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./app.scss";
import algoliasearch from 'algoliasearch/lite';
import { AssessmentComponent } from 'ui-components-react';

// Constants for Contentful API
const SPACE_ID = "h3n75a0xb6vi";
const ACCESS_TOKEN = "3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;
const searchClient = algoliasearch('4WK61QBPDU', 'a3a8a3edba3b7ba9dad65b2984b91e69');
const index = searchClient.initIndex('algolia-recommendation-data');


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
          jsonssss
        }
      }
    }
  }
`;

// Component to fetch and display assessment data
const AssessmentData = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENT_DATA);
  const [result, setResult] = useState([])


  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchData = async () => {
      try {
        const { hits } = await index.search('');
        setResult(hits);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchData();
  }, [result]);
  console.log(result , "====results")
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assessment: {error.message}</div>;

  const assessment = data.assessmentCollection.items[0];
  const questions = assessment.questions.pages;
  const resultsIntro = documentToReactComponents(assessment.resultsIntro.json);



  return (
    <>
      <AssessmentComponent
        questions={questions}
        showProgress={true}
      />
      {result && (
        <section className="blog-grid">
          {result.map((el, index) => (
            <article key={index} className="blog-post">
              {el.imageUrl ? (
                <img src={el.imageUrl} alt={el.title} className="blog-image" />
              ) : null}
              <div className="blog-content">
                <h2 className="blog-title">{el.title}</h2>
                <p className="blog-author">by {el.author}</p>
                <p className="blog-type">Type Of Resource: {el.type}</p>
                <p className="blog-description">{el.description}</p>
                <ul className="blog-tags">
                  {el.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="blog-tag">{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      )}
    </>

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
