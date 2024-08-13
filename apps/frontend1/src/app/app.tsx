import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./app.scss"
import algoliasearch from 'algoliasearch/lite';
// Initialize Algolia client

const searchClient = algoliasearch('4WK61QBPDU', 'a3a8a3edba3b7ba9dad65b2984b91e69');
const index = searchClient.initIndex('algolia-recommendation-data');
index.search('').then(({ hits }) => {
  console.log(hits);
});
index.searchForFacetValues('Vue.js', 'Vue.js').then(({ facetHits }) => {
  console.log(facetHits, "---facehits");
});


const userAnswers = {
  preferredLanguage: ["JavaScript"],
  familiarFrameworks: ["React", "Vue.js"],
  gitExperience: ["Yes"],
  remoteWorkExperience: ["Yes"],
  contributeOpenSource: ["Yes"]
  // ... other answers
};

// Construct facet filters
const constructFacetFilters = (answers: Answers) => {
  const filters = [];
  for (const [key, values] of Object.entries(answers)) {
    values.forEach(value => {
      if (typeof value === 'boolean') {
        filters.push(`${key}:${value ? 'true' : 'false'}`);
      } else {
        filters.push(`${key}:${value}`);
      }
    });
  }
  return filters;
};

// Fetch data from Algolia
const fetchData = async () => {
  try {
    const facetFilters = constructFacetFilters(userAnswers);
    console.log('Facet Filters:', facetFilters);

    const { hits } = await index.search('', { facetFilters });
    console.log('Algolia search results:', hits);

    if (hits.length === 0) {
      console.log('No results found. Check the following:');
      console.log('1. Verify that the facet filters are correctly defined in Algolia.');
      console.log('2. Ensure that the data in the index contains the values you are querying for.');
    }
  } catch (error) {
    console.error('Algolia search error:', error);
  }
};

// Call fetchData to perform the search
fetchData();
// Call fetchData to perform the search
fetchData();
const SPACE_ID = "h3n75a0xb6vi";
const ACCESS_TOKEN = "3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;


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
// Define the type for answers
interface Answers {
  [key: string]: string[]; // Adjust this type if necessary
}
// Component to display the assessment data
const AssessmentData = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENT_DATA);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [errors, setErrors] = useState({});
  const [searchResults, setSearchResults] = useState([]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading assessment</div>;

  const assessment = data.assessmentCollection.items[0];
  const pages = assessment.questions.pages;

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateCurrentStep = () => {
    const page = pages[currentStep];
    let isValid = true;
    let errors = {};

    page.elements.forEach((element) => {
      if (element.isRequired && !answers[element.name]) {
        isValid = false;
        errors[element.name] = 'This field is required';
      }
    });

    setErrors(errors);
    return isValid;
  };

  const handleNext = async (event) => {
    event.preventDefault();
    if (validateCurrentStep()) {
      if (currentStep < pages.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log('User Answers:', answers);

        // Construct facet filters from user answers
        const facetFilters = Object.entries(answers)
          .flatMap(([key, value]) => {
            if (Array.isArray(value)) {
              return value.map(val => `${key}:${val}`);
            } else if (typeof value === 'boolean') {
              return value ? `${key}:true` : `${key}:false`;
            } else {
              return `${key}:${value}`;
            }
          });

        console.log(facetFilters, "facetFilters");

        try {
          const { hits } = await index.search('', {
            facetFilters: [facetFilters]
          });
          console.log(hits, "==hits");
          setResults(hits);
        } catch (err) {
          console.error('Error performing search:', err);
        }
        index.search('').then(({ hits }) => {
          setSearchResults(hits)
        });
        alert('Assessment complete!');
      }
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepper = () => (
    <div className="stepper">
      {pages.map((_, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );

  const renderResults = () => (
    <div className="results">
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        results.map((hit, index) => (
          <div key={index} className="result-card">
            <h3>{hit.title}</h3>
            <p>Author: {hit.author}</p>
            <p>Type: {hit.type}</p>
            <p>{hit.description}</p>
            {hit.imageUrl && <img src={hit.imageUrl} alt={hit.title} />}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div>
      <h1>{assessment.name}</h1>
      <div>{documentToReactComponents(assessment.intro.json)}</div>
      <form onSubmit={handleNext}>
        <div>
          {pages[currentStep].elements.map((element, index) => (
            <div key={index}>
              <h3>{element.title}</h3>
              {element.type === 'radiogroup' && (
                <div>
                  {element.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex}>
                      <input
                        type="radio"
                        id={`${element.name}-${choiceIndex}`}
                        name={element.name}
                        value={choice}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={`${element.name}-${choiceIndex}`}>
                        {choice}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {element.type === 'checkbox' && (
                <div>
                  {element.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex}>
                      <input
                        type="checkbox"
                        id={`${element.name}-${choiceIndex}`}
                        name={element.name}
                        value={choice}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={`${element.name}-${choiceIndex}`}>
                        {choice}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {element.type === 'text' && (
                <div>
                  <input
                    type="text"
                    id={element.name}
                    name={element.name}
                    required={element.isRequired}
                    onChange={handleInputChange}
                  />
                  {errors[element.name] && (
                    <div className="error">{errors[element.name]}</div>
                  )}
                </div>
              )}
              {element.type === 'boolean' && (
                <div>
                  <div>
                    <input
                      type="radio"
                      id={`${element.name}-true`}
                      name={element.name}
                      value="true"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${element.name}-true`}>
                      {element.labelTrue || 'Yes'}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`${element.name}-false`}
                      name={element.name}
                      value="false"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${element.name}-false`}>
                      {element.labelFalse || 'No'}
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          {currentStep > 0 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          <button type="submit">
            {currentStep < pages.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>
      {results.length > 0 && renderResults()}
      {searchResults && (
  <section className="blog-grid">
    {searchResults.map((el, index) => (
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
