import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import "./app.scss";
import algoliasearch from 'algoliasearch/lite';
import { AssessmentComponent } from 'ui-components-react';
import RichTextRenderer from './components/RichTextRenderer';

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

const AssessmentData = () => {
  const [result, setResult] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);

  const { loading, error, data } = useQuery(GET_ASSESSMENT_DATA);
  const fetchResults = async (preferredLanguage) => {
    setLoadingResults(true);
    try {
      const { hits } = await index.search('', {
        facetFilters: [`relevantTo:preferredLanguage:${preferredLanguage}`],
      });
      console.log('Search results:', hits);
      setResult(hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResult([]); // Set an empty result to trigger "No results found" message
    } finally {
      setLoadingResults(false);
    }
  };

  const handleSearch = (event) => {
    console.log('Received event:', event);
    const preferredLanguage = event.detail;
    console.log('Preferred language:', preferredLanguage);
    setShowQuestions(false);
    fetchResults(preferredLanguage);
  };


  if (loading) return <div>Loading assessment data...</div>;
  if (error) return <div>Error loading assessment: {error.message}</div>;

  const assessment = data.assessmentCollection.items[0];
  const questions = assessment.questions.pages;
  const introContent = assessment.intro.json;
  const resultsIntro = assessment.resultsIntro.json;

  return (
    <>
      {showQuestions && (
        <>
          <RichTextRenderer document={introContent} />
          <AssessmentComponent
            questions={questions}
            showProgress={true}
            onAssessmentCompleted={handleSearch}
          />
        </>
      )}
      {loadingResults && <div>Loading search results...</div>}
      {!loadingResults && !showQuestions && (
        <>
          <h2>All relevant results returned by Algolia</h2>
          {result.length > 0 ? (
            <section className="blog-grid">
              {result.map((el, index) => (
                <article key={index} className="blog-card">
                  {el.imageUrl ? (
                    <img
                      src={el.imageUrl}
                      alt={el.title}
                      className="blog-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="blog-image-placeholder" />
                  )}
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
          ) : (
            <div>No results found.</div>
          )}
        </>
      )}
    </>
  );
};

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
