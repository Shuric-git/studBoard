(() => {
    'use strict'
    function createDesk() {
        let desk = document.createElement('div');
        desk.classList.add('container-fluid')

        return desk
    }

    function studentAddForm() {
        let form = document.createElement('form');
        let inputName = document.createElement('input');
        let inputMiddleName = document.createElement('input');
        let inputSurname = document.createElement('input');
        let inputStudyStart = document.createElement('input');
        let inputFak = document.createElement('input');
        let subButton = document.createElement('button')

        form.classList.add('input-group', 'mb-3');
        form.id = 'formish'
        inputName.classList.add('form-control', 'nameInput');
        inputName.value = 'Тест';
        inputMiddleName.classList.add('form-control', 'nameInput');
        inputMiddleName.value = 'Тестович';
        inputSurname.classList.add('form-control', 'nameInput');
        inputSurname.value = 'Тестов';
        inputStudyStart.classList.add('form-control');
        inputStudyStart.value = '2018.7.1'
        inputFak.classList.add('form-control');
        inputFak.value = 'Тестерин';
        subButton.classList.add('btn', 'btn-primary',);
        subButton.textContent = 'Добавить студента';

        form.append(inputName);
        form.append(inputMiddleName);
        form.append(inputSurname);
        form.append(inputStudyStart);
        form.append(inputFak);
        form.append(subButton)

        return {
            form,
            inputName,
            inputMiddleName,
            inputSurname,
            inputStudyStart,
            inputFak,
            subButton,
        };
    }

    function createFilters(studArr) {
        let optionForm = document.createElement('form');
        optionForm.classList.add('input-group', 'mb-3');
        let filterName = document.createElement('select');
        filterName.classList.add('form-select');
        let filterStudyStart = document.createElement('select');
        filterStudyStart.classList.add('form-select');
        let filterFak = document.createElement('select');
        filterFak.classList.add('form-select')

        let mappedNames = studArr.map( person => {
            return person.name
        })

        for ( let i = 0; i < mappedNames.length; i++) {
            let optionName = document.createElement('option');
            optionName.innerText = mappedNames[i]
            filterName.append(optionName)
        }
        optionForm.append(filterName)

        let mappedStudyStart = studArr.map( person => {
            return person.studyPeriod
        })

        for ( let i = 0; i < mappedStudyStart.length; i++) {
            let optionStudyStart = document.createElement('option');
            optionStudyStart.innerText = mappedStudyStart[i]
            filterStudyStart.append(optionStudyStart)
        }
        optionForm.append(filterStudyStart)

        let mappedFak = studArr.map( person => {
            return person.fak
        })

        for ( let i = 0; i < mappedFak.length; i++) {
            let optionFak = document.createElement('option');
            optionFak.innerText = mappedFak[i]
            filterFak.append(optionFak)
        }
        optionForm.append(filterFak)

        return {
            optionForm,
        }
    }

    function createStudList(studArr) {
        const studList = document.createElement('ul')
        studList.classList.add('list-group');

        const headersStudList = document.createElement('ul');
        headersStudList.classList.add('list-group', 'list-group-horizontal', 'listHeaders');

        const headersArray = ['Имя', 'Отчество', 'Фамилия', 'Дата окончания обучения', 'Факультет']

        for ( let i = 0; i != headersArray.length; i++) {
            const headersStudListItem = document.createElement('li');
            headersStudListItem.classList.add('list-group-item', 'flex-fill', 'headerItem');
            headersStudListItem.innerText = headersArray[i]
            headersStudListItem.id = headersArray[i]
            headersStudList.append(headersStudListItem);
        }

        studList.append(headersStudList)

        for (let prop of studArr) {
            let students = prop
            const studListItem = document.createElement('li');
            studListItem.classList.add('list-group-item');
            const studPropList = document.createElement('ul');
            studPropList.classList.add('list-group','list-group-horizontal', 'studPropList');
            studList.append(studListItem)
            studListItem.append(studPropList)
            for (let key of Object.values(students)) {
                const studProp = document.createElement('li');
                studProp.classList.add('list-group-item', 'flex-fill', 'studItem');
                studPropList.append(studProp)
                const text = document.createTextNode(key);
                studProp.prepend(text);
            }  
        }
        return {
            studList,
        }
    }

    function createStudDeskApp(container) {

        let studArr = [
            {
                name: 'Яна',
                middleName: 'Сановна',
                surname: 'Павлова',
                studyPeriod: '05.11.2012-05.11.2016',
                fak: 'Мандалор',
            },
            {
                name: 'Пал',
                middleName: 'Олегыч',
                surname: 'Янов',
                studyPeriod: '17.05.1900-17.05.1904',
                fak: 'Пуфендуй',
            },
            {
                name: 'Сан',
                middleName: 'Палыч',
                surname: 'Олегов',
                studyPeriod: '23.07.1905-23.07.1909',
                fak: 'Флапифлай',
            },
            {
                name: 'Олег',
                middleName: 'Яныч',
                surname: 'Санов',
                studyPeriod: '23.12.2117-23.12.2121',
                fak: 'Рампапорт',
            },
        ]

        let studDesk = createDesk();
        let addForm = studentAddForm();
        let createList = createStudList(studArr);
        let createNameFilter = createFilters(studArr)
        
        container.append(addForm.form);
        container.append(createNameFilter.optionForm)
        container.append(studDesk);
        studDesk.append(createList.studList);

        
        createNameFilter.optionForm.addEventListener('click', function(e) {
            if (e.target.tagName ==='OPTION') {
                e.preventDefault();
                e.target.classList.toggle('select')
                console.log(e)

            }
        })
        
        addForm.form.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.tagName === 'BUTTON') {
                let elems = document.getElementsByTagName('input');
                for (let i = 0; i < elems.length; i++) {
                        if (elems[i].value === ''){
	                    elems[i].placeholder = 'Вы забыли заполнить это поле';
                    } else {
                        elems[i].placeholder = ''
                    }
                }
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].placeholder === 'Вы забыли заполнить это поле'){
                    return
                    }
                }

                const dateRegex = /\d{4}\W\d{1,2}\W\d{1,2}/

                if (!addForm.inputStudyStart.value.match(dateRegex)) {
                    addForm.inputStudyStart.value = 'Введите дату в формате ГГГГ.ММ.ДД';
                    return
                }

                let studyStartInput = addForm.inputStudyStart.value
                const splitterRegex = /\W/

                let dateString = studyStartInput.split(splitterRegex)
                let studyStartDate = new Date();
                let currentDate = new Date();
                studyStartDate.setFullYear(+dateString[0], +dateString[1], +dateString[2],)
                let studyStart = studyStartDate.getDate() + '.' + (studyStartDate.getMonth() + 1) + '.' +  (studyStartDate.getFullYear());
                let studyDoneDate = studyStartDate.getDate() + '.' + (studyStartDate.getMonth() + 1) + '.' +  (studyStartDate.getFullYear() + 4);
                if (currentDate.getMonth() >= 7) {
                    studyDoneDate += (' (закончил)')
                }

                // function CreateStudent(name, middleName, surname, studyDoneDate, fak) {
                //     this.name = name;
                //     this.middleName = middleName;
                //     this.surname = surname;
                //     this.studystart = studyDoneDate;
                //     this.fak = fak;
                // }
    
                // let newStudent = new CreateStudent(addForm.inputName.value, addForm.inputMiddleName.value, addForm.inputSurname.value, studyDoneDate, addForm.inputFak.value)

                function createStudent(name, middleName, surname, studyStart, studyDoneDate, fak) {
                    let newStudent = {}
                    newStudent.name = name;
                    newStudent.middleName = middleName;
                    newStudent.surname = surname;
                    newStudent.studyPeriod = studyStart + '-' + studyDoneDate;
                    newStudent.fak = fak;
                    studArr.push(newStudent)
                }
                createStudent(addForm.inputName.value, addForm.inputMiddleName.value, addForm.inputSurname.value, studyStart, studyDoneDate, addForm.inputFak.value)

                while (studDesk.firstChild) {
                    studDesk.firstChild.remove();
                }
                createList = createStudList(studArr);
                studDesk.append(createList.studList);
                for (let i = 0; i < elems.length; i++) {
                    elems[i].value = '';
                }

                // function nameFilter (studArr) {
                //     let nameFilteredArray = studArr.filter( item => {
                //         for (let key of Object.values(item)) {
                //             console.log(item.name)
                //             // if (key === 'Пал') {
                //             //     return item
                //             // } 
                //         }
                //     })
                //     while (studDesk.firstChild) {
                //         studDesk.firstChild.remove();
                //     }
                //     createList = createStudList(nameFilteredArray);
                //     studDesk.append(createList.studList);
                //     for (let i = 0; i < elems.length; i++) {
                //         elems[i].value = '';
                //     }
                // }
                // nameFilter(studArr)
            }
        })

        document.addEventListener('click', (ev) => {
            ev.preventDefault();
            if (ev.target.id === 'Имя' ) {
                nameSort(studArr);
            }
            if (ev.target.id === 'Отчество' ) {
                middleNameSort(studArr);
            }
            if (ev.target.id === 'Фамилия' ) {
                surnameSort(studArr);
            }
            if (ev.target.id === 'Дата окончания обучения' ) {
                studyStartSort(studArr);
            }
            if (ev.target.id === 'Факультет' ) {
                fakSort(studArr);
            }
        })

        function nameSort(studArr) {
            let sortedArray = studArr.sort((prev, next) => {
                if ( prev.name < next.name ) return -1;
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
        function middleNameSort(studArr) {
            let sortedArray = studArr.sort((prev, next) => {
                if ( prev.middleName < next.middleName ) return -1;
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
        function surnameSort(studArr) {
            let sortedArray = studArr.sort((prev, next) => {
                if ( prev.surname < next.surname ) return -1;
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
        function studyStartSort(studArr) {
            const splitterRegex = /\W{1,3}/
            let sortedArray = studArr.sort((prev, next) =>  {
                let splitPrev = prev.studyPeriod.split(splitterRegex)
                let splitNext = next.studyPeriod.split(splitterRegex)
                if (splitPrev[2] - splitNext[2] === 0 && splitPrev[1] - splitNext[1] === 0) {
                    if (splitPrev[0] - splitNext[0] > 0) {
                        return -1
                    }
                }
                else if (splitPrev[2] - splitNext[2] === 0) {
                    if (splitPrev[1] - splitNext[1] > 0) {
                        return -1
                    }
                }
                else if (splitPrev[2] - splitNext[2] > 0) {
                    return -1
                }
                
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
        function fakSort(studArr) {
            let sortedArray = studArr.sort((prev, next) => {
                if ( prev.fak < next.fak ) return -1;
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
    }

    window.createStudDeskApp = createStudDeskApp

})()