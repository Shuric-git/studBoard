(() => {
    'use strict'

    const headersArray = ['ФИО', 'Возраст', 'Период обучения', 'Факультет']

    function createDesk() {
        let desk = document.createElement('div');
        desk.classList.add('container-fluid')

        return desk
    }

    function studentAddForm() {
        const form = document.createElement('form');
        const inputName = document.createElement('input');
        const inputMiddleName = document.createElement('input');
        const inputSurname = document.createElement('input');
        const inputStudyStart = document.createElement('input');
        const inputAge = document.createElement('input');
        const inputFak = document.createElement('input');
        const subButton = document.createElement('button')

        form.classList.add('input-group', 'mb-3');
        form.id = 'formish';
        inputName.classList.add('form-control', 'nameInput', 'addInput');
        inputName.value = 'Тест';
        inputMiddleName.classList.add('form-control', 'nameInput', 'addInput');
        inputMiddleName.value = 'Тестович';
        inputSurname.classList.add('form-control', 'nameInput', 'addInput');
        inputSurname.value = 'Тестов';
        inputAge.classList.add('form-control', 'addInput');
        inputAge.value = '08.22.1986'
        inputStudyStart.classList.add('form-control', 'addInput');
        inputStudyStart.value = '2018'
        inputFak.classList.add('form-control', 'addInput');
        inputFak.value = 'Тестерин';
        subButton.classList.add('btn', 'btn-primary');
        subButton.textContent = '+';

        form.append(
            inputName,
            inputMiddleName,
            inputSurname,
            inputAge,
            inputStudyStart,
            inputFak,
            subButton
            );


        return {
            form,
            inputName,
            inputMiddleName,
            inputSurname,
            inputAge,
            inputStudyStart,
            inputFak,
            subButton,
        };
    }

    function createFilters() {
        const filterForm = document.createElement('form');
        const filterName = document.createElement('input');
        const filterStudyPeriod = document.createElement('input');
        const filterAge = document.createElement('input');
        const filterFak = document.createElement('input');
        const filterButton = document.createElement('button');
        const clearFilterButton = document.createElement('button');

        filterForm.classList.add('input-group', 'mb-3');
        filterForm.id = 'filterForm';
        filterName.classList.add('form-control', "filterNameInput", 'filterInput');
        filterStudyPeriod.classList.add('form-control', 'filterStudyPeriodInput', 'filterInput');
        filterAge.classList.add('form-control', 'filterAgeInput', 'filterInput');
        filterFak.classList.add('form-control', 'filterFakInput', 'filterInput');
        filterButton.classList.add('filterButton', 'btn', 'btn-primary');
        filterButton.id = 'filterButtonId';
        clearFilterButton.classList.add('clearFilterButton', 'btn', 'btn-primary');
        clearFilterButton.id = 'clearFilterButtonId';
        
        for ( let i = 0; i < 4; i++ ) {
            filterForm.append(
                document.createElement('input').classList.add('form-control', 'filterInput'));
        };

        filterForm.append(
            clearFilterButton, 
            filterName,
            filterStudyPeriod,
            filterAge,
            filterFak,
            filterButton
            );

        return {
            filterForm,
            filterName,
            filterStudyPeriod,
            filterAge,
            filterFak,
            filterButton,
        }
    }

    // function createFilters(studArr) {
    //     let optionForm = document.createElement('form');
    //     optionForm.classList.add('input-group', 'mb-3', 'filter');
    //     let filterName = document.createElement('select');
    //     filterName.classList.add('form-select');
    //     let filterStudyStart = document.createElement('select');
    //     filterStudyStart.classList.add('form-select');
    //     let filterFak = document.createElement('select');
    //     filterFak.classList.add('form-select')

    //     let mappedNames = studArr.map( person => {
    //         return person.name
    //     })

    //     for ( let i = 0; i < mappedNames.length; i++) {
    //         let optionName = document.createElement('option');
    //         optionName.innerText = mappedNames[i]
    //         filterName.append(optionName)
    //     }
    //     optionForm.append(filterName)

    //     let mappedStudyStart = studArr.map( person => {
    //         return person.studyPeriod
    //     })

    //     for ( let i = 0; i < mappedStudyStart.length; i++) {
    //         let optionStudyStart = document.createElement('option');
    //         optionStudyStart.innerText = mappedStudyStart[i]
    //         filterStudyStart.append(optionStudyStart)
    //     }
    //     optionForm.append(filterStudyStart)

    //     let mappedFak = studArr.map( person => {
    //         return person.fak
    //     })

    //     for ( let i = 0; i < mappedFak.length; i++) {
    //         let optionFak = document.createElement('option');
    //         optionFak.innerText = mappedFak[i]
    //         filterFak.append(optionFak)
    //     }
    //     optionForm.append(filterFak)

    //     return {
    //         optionForm,
    //     }
    // }

    function createStudList(studArr) {
        const studList = document.createElement('ul')
        studList.classList.add('list-group');

        const headersStudList = document.createElement('ul');
        headersStudList.classList.add('list-group', 'list-group-horizontal', 'listHeaders');

        for ( let i = 0; i != headersArray.length; i++) {
            const headersStudListItem = document.createElement('li');
            headersStudListItem.classList.add('list-group-item', 'flex-fill', 'headerItem');
            headersStudListItem.innerText = headersArray[i]
            headersStudListItem.id = headersArray[i]
            headersStudList.append(headersStudListItem);
        }

        studList.append(headersStudList)

        const mappedStudArr = []
        
        for ( let i = 0; i < studArr.length; i++) {
            const mappedStudObj = {};
            mappedStudObj.fio = studArr[i].name + ' ' + studArr[i].middleName + ' ' + studArr[i].surname;
            mappedStudObj.age = _calculateAge(new Date(studArr[i].age));
            mappedStudObj.studyPeriod = studyPeriodCalcuate(studArr[i].studyPeriod);
            mappedStudObj.fak = studArr[i].fak;
            mappedStudArr.push(mappedStudObj);
        };

        for (let prop of mappedStudArr) {
            let students = prop;
            const studListItem = document.createElement('li');
            studListItem.classList.add('list-group-item');
            const studPropList = document.createElement('ul');
            studPropList.classList.add('list-group','list-group-horizontal', 'studPropList');
            studList.append(studListItem);
            studListItem.append(studPropList);
            for (let key of Object.values(students)) {
                const studProp = document.createElement('li');
                studProp.classList.add('list-group-item', 'flex-fill', 'studItem');
                studPropList.append(studProp);
                const text = document.createTextNode(key);
                studProp.prepend(text);
            }  
        }
        return {
            studList,
        }
    }

    function studyPeriodCalcuate(studyStartYear) {
        let currentDate = new Date();
        let studyDoneYear = +studyStartYear + 4;
        if (studyDoneYear < currentDate.getFullYear()) {
            studyDoneYear += (' (закончил)')
        } else if (studyDoneYear === currentDate.getFullYear() && currentDate.getMonth() >= 7) {
            studyDoneYear += (' (закончил)')
        }
        const studyPeriod = studyStartYear + '-' + studyDoneYear;
        // console.log(studyPeriod)
        return studyPeriod
    }

    function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function createStudDeskApp(container) {

        let studArr = [
            {
                name: 'Яна',
                middleName: 'Сановна',
                surname: 'Павлова',
                age: '03.07.1995',
                studyPeriod: '2003',
                fak: 'Мандалор',
            },
            {
                name: 'Пал',
                middleName: 'Олегыч',
                surname: 'Янов',
                age: '03.02.1982',
                studyPeriod: '2000',
                fak: 'Пуфендуй',
            },
            {
                name: 'Сан',
                middleName: 'Палыч',
                surname: 'Олегов',
                age: '07.01.1987',
                studyPeriod: '2005',
                fak: 'Флапифлай',
            },
            {
                name: 'Олег',
                middleName: 'Яныч',
                surname: 'Санов',
                age: '06.25.2001',
                studyPeriod: '2019',
                fak: 'Рампапорт',
            },
        ]

        let studDesk = createDesk();
        let addForm = studentAddForm();
        let createList = createStudList(studArr);
        const addFilterForm = createFilters()
        // let createNameFilter = createFilters(studArr)
        
        container.append(addForm.form);
        container.append(addFilterForm.filterForm)
        container.append(studDesk);
        studDesk.append(createList.studList);

        
        // createNameFilter.optionForm.addEventListener('change', function(e) {
        //     // if (e.target.tagName ==='OPTION') {
        //         e.preventDefault();
        //         e.target.classList.toggle('select')
        //         console.log(e.target)
        //     // }
        // })
        
        addForm.form.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.tagName === 'BUTTON') {
                let elems = document.querySelectorAll('.addInput');
                for (let i = 0; i < elems.length; i++) {
                        if (elems[i].value === ''){
	                    elems[i].placeholder = 'Вы забыли заполнить';
                    } else {
                        elems[i].placeholder = ''
                    }
                }
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].placeholder === 'Вы забыли заполнить'){
                    return
                    }
                }

                const dateRegex = /\d{4}/

                if (!addForm.inputStudyStart.value.match(dateRegex)) {
                    addForm.inputStudyStart.value = 'Введите год';
                    return
                }

                let studyStartInput = addForm.inputStudyStart.value

                // function CreateStudent(name, middleName, surname, studyDoneYear, fak) {
                //     this.name = name;
                //     this.middleName = middleName;
                //     this.surname = surname;
                //     this.studystart = studyDoneYear;
                //     this.fak = fak;
                // }
    
                // let newStudent = new CreateStudent(addForm.inputName.value, addForm.inputMiddleName.value, addForm.inputSurname.value, studyDoneYear, addForm.inputFak.value)

                function createStudent(name, middleName, surname, age, studyPeriod, fak) {
                    let newStudent = {}
                    newStudent.name = name
                    newStudent.middleName = middleName;
                    newStudent.surname = surname;
                    newStudent.age = new Date(age)
                    newStudent.studyPeriod = studyPeriod
                    newStudent.fak = fak;
                    studArr.push(newStudent)
                }

                createStudent(addForm.inputName.value, addForm.inputMiddleName.value, addForm.inputSurname.value, addForm.inputAge.value, studyStartInput, addForm.inputFak.value)

                studDesk.innerHTML = ''
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

        addFilterForm.filterForm.addEventListener('click', (ev) => {
            ev.preventDefault();
            if ( ev.target.id === 'filterButtonId') {
                studDesk.innerHTML =''
            
                const filterElems = document.querySelectorAll('.filterInput');
                const filteredStudArr = studArr.filter( item => {
                    if ((filterElems[0].value).toLowerCase() === (item.name).toLowerCase()) {
                        return item
                    } else if ((filterElems[0].value).toLowerCase() === (item.middleName).toLowerCase()) {
                        return item
                    } else if ((filterElems[0].value).toLowerCase() === (item.surname).toLowerCase()) {
                        return item
                    } else if (filterElems[1].value === (item.studyPeriod).split('-')[0]) {
                        return item
                    }
                })
                createList = createStudList(filteredStudArr);
                studDesk.append(createList.studList);
                for (let i = 0; i < filterElems.length; i++) {
                    filterElems[i].value = '';
                }
            } else if ( ev.target.id === 'clearFilterButtonId' ) {
                studDesk.innerHTML =''

                createList = createStudList(studArr);
                studDesk.append(createList.studList);
            }
        })

        

        document.addEventListener('click', (ev) => {
            ev.preventDefault();
            if (ev.target.id === 'ФИО' ) {
                nameSort(studArr);
            }
            if (ev.target.id === 'Возраст' ) {
                ageSort(studArr);
            }
            if (ev.target.id === 'Период обучения' ) {
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
        function ageSort(studArr) {
            let sortedArray = studArr.sort((prev, next) => {
                if ( _calculateAge(new Date(prev.age)) > _calculateAge(new Date(next.age)) ) return -1;
            });
            while (studDesk.firstChild) {
                studDesk.firstChild.remove();
            }
            let sorterList = createStudList(sortedArray)
            studDesk.append(sorterList.studList)
        }
        function studyStartSort(studArr) {
            const splitterRegex = /\W/
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