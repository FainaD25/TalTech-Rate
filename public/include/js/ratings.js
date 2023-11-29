document.addEventListener("DOMContentLoaded", function() {
    const loadMoreSubjectBtn = document.getElementById('load-more-subject');
    const subjectItemContainer = document.getElementById('subject-items');

    loadMoreSubjectBtn.addEventListener('click', function() {
        for (let i = 0; i < 3; i++) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML =
                "<h3>Lorem ipsum (XXX0000) <span class=\"stars\">★★★★★</span></h3>\n" +
                "<a href=\"subject.html\">\n" +
                "  <span class=\"link\"></span>\n" +
                "</a>";
            subjectItemContainer.insertBefore(newItem, loadMoreSubjectBtn);
        }
    });

    const loadMoreTeacherBtn = document.getElementById('load-more-teacher');
    const teacherItemContainer = document.getElementById('teacher-items');

    loadMoreTeacherBtn.addEventListener('click', function() {
        for (let i = 0; i < 3; i++) {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML =
                "<h3>Lorem Ipsum <span class=\"stars\">★★★★★</span></h3>\n" +
                "<a href=\"teacher.html\">\n" +
                "   <span class=\"link\"></span>\n" +
                "</a>";
            teacherItemContainer.insertBefore(newItem, loadMoreTeacherBtn);
        }
    });

    // Searchbox click event
    const searchBox = document.getElementById('searchbox');

    searchBox.addEventListener('click', function() {
        window.location.href = 'search.html';
    });
});
