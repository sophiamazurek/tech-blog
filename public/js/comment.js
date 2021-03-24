const commentFormHandler = async (event) => {
    event.preventDefault();

  
    // Collect values from the login form
    const body = document.querySelector('#project-comment').value.trim();
    const project_id = parseInt(document.getElementById("submitBtn").name);//document.querySelector('#submitBtn').getAttribute("data-value");

    console.log(body)
    console.log(project_id)

  
    if (body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ body, project_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);