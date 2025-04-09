let feedbacks = [];

        function addFeedback() {
            const authorInput = document.getElementById('author-input');
            const passwordInput = document.getElementById('password-input');
            const feedbackInput = document.getElementById('feedback-input');
            const authorName = authorInput.value.trim();
            const password = passwordInput.value.trim();
            const feedbackText = feedbackInput.value.trim();

            if (authorName === '' || password === '' || feedbackText === '') {
                alert('Por favor, insira seu nome, senha e feedback.');
                return;
            }

            const feedback = {
                id: Date.now(),
                author: authorName,
                password: password,
                text: feedbackText,
                date: new Date()
            };

            feedbacks.push(feedback);
            authorInput.value = '';
            passwordInput.value = '';
            feedbackInput.value = '';
            renderFeedbacks();
        }

        function renderFeedbacks() {
            const feedbackList = document.getElementById('feedback-list');
            feedbackList.innerHTML = '';

            feedbacks.sort((a, b) => b.date - a.date);

            feedbacks.forEach(feedback => {
                const feedbackItem = document.createElement('li');
                feedbackItem.className = 'feedback-item';
                feedbackItem.innerHTML = `
                    <div><strong>${feedback.author}</strong></div>
                    <div>${feedback.text}</div>
                    <div>${feedback.date.toLocaleString()}</div>
                    <div class="feedback-actions">
                        <button onclick="editFeedback(${feedback.id})">Editar</button>
                        <button onclick="deleteFeedback(${feedback.id})">Excluir</button>
                    </div>
                `;
                feedbackList.appendChild(feedbackItem);
            });
        }

        function editFeedback(id) {
            const feedback = feedbacks.find(fb => fb.id === id);
            const password = prompt('Digite sua senha para editar:');

            if (password === feedback.password) {
                const newAuthor = prompt('Edite seu nome:', feedback.author);
                const newText = prompt('Edite seu feedback:', feedback.text);

                if (newAuthor !== null && newAuthor.trim() !== '' && newText !== null && newText.trim() !== '') {
                    feedback.author = newAuthor.trim();
                    feedback.text = newText.trim();
                    renderFeedbacks();
                }
            } else {
                alert('Senha incorreta. Você não pode editar este feedback.');
            }
        }

        function deleteFeedback(id) {
            const feedback = feedbacks.find(fb => fb.id === id);
            const password = prompt('Digite sua senha para excluir:');

            if (password === feedback.password) {
                feedbacks = feedbacks.filter(fb => fb.id !== id);
                renderFeedbacks();
            } else {
                alert('Senha incorreta. Você não pode excluir este feedback.');
            }
        }