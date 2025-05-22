
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const description = document.getElementById('description').value.trim();
        const imageInput = document.getElementById('upload-image');
        const image = imageInput.files[0];

        if (!name || !description || !image) {
            alert('Please fill all fields and select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
         
            const blogPost = {
                id: Date.now(),
                name: name,
                description: description,
                image: e.target.result
            };

        
            let posts = JSON.parse(localStorage.getItem('posts') || '[]');
            posts.push(blogPost);
            localStorage.setItem('posts', JSON.stringify(posts));

            displayPosts();
            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            imageInput.value = '';
        };
        reader.readAsDataURL(image);
    });

    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const display = document.getElementById('display-blog');
        display.innerHTML = '';
        posts.forEach(post => {
         
            const postDiv = document.createElement('div');
            postDiv.className = 'blog-post';

    
            const deleteBtn = document.createElement('span');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '✕';
            deleteBtn.onclick = () => deletePost(post.id);
            postDiv.appendChild(deleteBtn);

            const title = document.createElement('h2');
            title.textContent = post.name;
            postDiv.appendChild(title);

        
            const img = document.createElement('img');
            img.src = post.image;
            img.alt = 'blog image';
            img.width = 150;
            img.height = 150;
            postDiv.appendChild(img);

    
            const desc = document.createElement('p');
            desc.textContent = post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description;
            postDiv.appendChild(desc);

       
            const btn = document.createElement('button');
            btn.className = 'read-more-btn';
            btn.textContent = '...';
            btn.onclick = () => alert(post.description);
            postDiv.appendChild(btn);

            display.appendChild(postDiv);
        });
    }

  

    window.onload = function() {
        displayPosts();
    };

    function deletePost(id) {
        if (confirm('Are you sure you want to delete this post?')) {
            let posts = JSON.parse(localStorage.getItem('posts') || '[]');
            posts = posts.filter(post => post.id !== id);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }

