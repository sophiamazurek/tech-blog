const newFormHandler = async (event) => {
  event.preventDefault();

  // once comment added it should display down here DO NOT FORGET

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = 50;
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

  // const commentFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   // once comment added it should display down here DO NOT FORGET
  
  //   const comment = document.querySelector('#project-comment').value.trim();
  //   const user_id = 1;
  //   const description = document.querySelector('#project-desc').value.trim();
  
  //   if (comment && user_id ) {
  //     const response = await fetch(`/api/comment`, {
  //       method: 'POST',
  //       body: JSON.stringify({ comment, user_id }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to create comment');
  //     }
  //   }
  // };

  // document
  // .querySelector('.comment-form')
  // .addEventListener('click', commentFormHandler);
