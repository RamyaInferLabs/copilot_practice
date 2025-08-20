# Copilot Custom Instructions for React and CSS Project

## Project Overview
This project is built using **React** for the frontend framework and **CSS** for styling. The goal is to create a dynamic and interactive user interface with clean and modular code.

## Key Technologies
- **React**: Used for building reusable UI components and managing state.
- **CSS**: Used for styling the application, including layout, typography, colors, and responsiveness.

## File Structure
The project follows a standard React structure:
- **src/**: Contains the source code.
  - **components/**: Reusable React components.
  - **styles/**: CSS files for styling components.
  - **App.js**: Main React application entry point.
  - **index.js**: Entry point for rendering the React app.

## Guidelines for Copilot Suggestions
1. **React Component Syntax**:
   - Prioritize functional components with hooks (e.g., `useState`, `useEffect`).
   - Follow JSX syntax conventions for rendering elements.

2. **CSS Styling**:
   - Suggest modular CSS practices (e.g., CSS classes scoped to components).
   - Provide recommendations for responsive design using media queries.

3. **State Management**:
   - Offer examples using `useState` and `useEffect` for local state management.
   - Avoid suggesting class component lifecycle methods unless specified.

4. **Code Quality and Best Practices**:
   - Ensure suggestions follow React best practices such as:
     - Using `key` props in lists.
     - Avoiding inline styling unless necessary.
     - Suggesting prop validation using `PropTypes` (optional).
   - Encourage semantic HTML elements for accessibility.

5. **Error Handling**:
   - Provide error boundary patterns if applicable.
   - Suggest meaningful error messages for debugging.

6. **CSS Specifics**:
   - Suggest well-organized class names (e.g., `btn-primary`, `card-container`).
   - Recommend using CSS variables for consistent theming.

## Example Scenarios for Copilot
- **Creating a React Component**:
  ```jsx
  const Button = ({ label, onClick }) => {
    return (
      <button className="btn-primary" onClick={onClick}>
        {label}
      </button>
    );
  };
  ```

- **Writing CSS**:
  ```css
  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  ```

## Notes
- If a library or framework (e.g., React Router, Redux) is added later, update this document to reflect those changes.
- Always ensure suggestions align with the project's coding standards and goals.
