### Instruction:

1. Clone or Download ZIP
2. Go to the project root level and npm install
3. Run the Next.js server: npm run dev
4. Open on browser: http://localhost:3001/

   Project Setup:
   Start by creating a new Next.js project with TypeScript support.
   Install TailwindCSS for styling and react-hook-form for form handling.
   Set up the basic project structure with pages for each form step and a context provider to manage form state across pages.

   Styling with TailwindCSS:
   Use TailwindCSS to create a clean and modern UI. Define global styles and customize the Tailwind configuration if needed.
   Ensure responsive design by using Tailwind’s utility classes for layout and spacing.

   Form Context:
   Create a context using React’s Context API to manage the form data across multiple pages.
   Implement a FormProvider that holds the form state and provides methods to update it.

   Step-by-Step Form Pages:
   Implement individual form steps as separate pages. Each page collects specific pieces of information.
   Use react-hook-form to manage form validation and submission.

   Reusable Components:
   Create reusable components like Card for selecting visitor types. Ensure these components are flexible and styled using TailwindCSS.
   Implement a Card component that can be selected and updates the form state accordingly.

   Review and Submit:
   Implement a review page that displays the collected form data.
   Allow the user to submit the form, simulate an API call, and show a success message using react-toastify.

   Toast Notifications:
   Use react-toastify to provide feedback to the user upon form submission. Display a success message indicating the form was submitted successfully.

   Testing and Deployment:
   Test the application thoroughly to ensure all form steps work as expected and data is managed correctly.
   Deploy the application to a platform like Vercel, taking advantage of Next.js’ optimized build and deployment process.

Example Implementation

Here is a brief walkthrough of the code for the multi-page form:

    Context Setup:
        Create a FormContext to manage and share form data across pages.

    Form Pages:
        Implement pages for each form step, utilizing react-hook-form for input handling.
        Example: A page to select visitor type and reason, and another to enter visit details.

    Review Page:
        Display the collected data for user review before final submission.
        Implement a submit handler that logs the data and shows a toast notification.

    Styling:
        Use TailwindCSS to style the form, ensuring a consistent and responsive design.
