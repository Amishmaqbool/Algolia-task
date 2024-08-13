import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./app.scss"
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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});

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

  const handleNext = (event) => {
    event.preventDefault();
    if (validateCurrentStep()) {
      if (currentStep < pages.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Handle form submission or completion here
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
