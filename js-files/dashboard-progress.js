function load() {
    let button = document.getElementById('submit-button');
    let objects = [];
    let grades = [];
    let barUpdates = 0;
    let assessments = document.querySelectorAll('.assessment');
    for (const assessment of assessments) {
        let obj = {};
        obj.exam = assessment;
        obj.ec = null;
        obj.grade = 0;
        obj.box = null;
        obj.btn = null;
        let leg = assessment.parentElement.children.length;
        if (leg <= 3) {
            obj.ec = assessment.parentElement.children[1];
            obj.box = assessment.parentElement.children[2].children[0];
            obj.btn = assessment.parentElement.children[2].children[1].children[0];
            obj.btn.addEventListener('click', handler);
        }
        else if (leg === 6) {
            obj.box = assessment.parentElement.children[5].children[0];
            obj.btn = assessment.parentElement.children[5].children[1].children[0];
            obj.btn.addEventListener('click', handler);
            obj.ec = assessment.parentElement.children[3];
        }
        else {
            obj.box = assessment.parentElement.children[4].children[0];
            obj.btn = assessment.parentElement.children[4].children[1].children[0];
            obj.btn.addEventListener('click', handler);
            obj.ec = assessment.parentElement.children[3];
        }
        objects.push(obj);
    }

    async function handler(e) {
        let currObj = null;
        for (const obj of objects) {
            if (obj.btn.isSameNode(e.target)) {
                currObj = obj;
                break;
            }
        }
        let value = currObj.box.value;
        currObj.grade = 0;
        if (value === '-') {
            currObj.exam.style.background = '#DB983B';
            currObj.grade = '?';
        }
        else if (Number(value) >= 5.5) {
            currObj.exam.style.background = '#21B6A8';
            currObj.grade = Number(value);
        }
        else {
            currObj.grade = Number(value);
            currObj.exam.style.background = '#DF505C';
        }
        currObj.btn.classList.add('disappear');
        currObj.box.classList.add('disappear');
        currObj.btn.parentElement.classList.add('disappear');
        let p = document.createElement('p');
        if (currObj.grade === '?') {
            p.textContent = 'Pending';
        }
        else {
            if (currObj.grade >= 5.5) {
                let width = Number(currObj.ec.textContent);
                barUpdates += width;
                let bar = document.getElementsByClassName('progressbar')[0];
                bar.style.width = barUpdates * 10 / 6 + '%';
            }
            p.textContent = currObj.grade;
        }
        p.classList.add('show-p');
        await new Promise(r => setTimeout(r, 2000));
        currObj.box.parentElement.appendChild(p);
    }
}