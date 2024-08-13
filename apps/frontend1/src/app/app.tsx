import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const SPACE_ID = "h3n75a0xb6vi";
const ACCESS_TOKEN = "3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const client = new GraphQLClient(ENDPOINT, {
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

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.request(GET_ASSESSMENT_DATA)
      .then(data => {
        setData(data.assessmentCollection.items);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching assessment data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assessment</div>;

  return (
    <div>
      {data.map(assessment => (
        <div key={assessment.slug}>
          <h1>{assessment.name}</h1>
          {/* Render assessment content */}
        </div>
      ))}
    </div>
  );
};

export default App;
