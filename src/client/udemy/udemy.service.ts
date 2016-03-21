export class UdemyService {

    getCourses(): string[] {
        return ["course1", "course2", "course3"];
    };

    getPersons() {
        return [{
            "id": 1,
            "gender": "Male",
            "first_name": "Larry",
            "last_name": "Day",
            "email": "lday0@mysql.com",
            "image": "http://lorempixel.com/100/100/people/1",
            "about": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
        }, {
                "id": 2,
                "gender": "Female",
                "first_name": "Nancy",
                "last_name": "Moore",
                "email": "nmoore1@acquirethisname.com",
                "image": "http://lorempixel.com/100/100/people/2",
                "about": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
            }, {
                "id": 3,
                "gender": "Female",
                "first_name": "Sharon",
                "last_name": "Sanchez",
                "email": "ssanchez2@toplist.cz",
                "image": "http://lorempixel.com/100/100/people/3",
                "about": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
            }, {
                "id": 4,
                "gender": "Female",
                "first_name": "Jane",
                "last_name": "Ramirez",
                "email": "jramirez3@reuters.com",
                "image": "http://lorempixel.com/100/100/people/4",
                "about": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia."
            }, {
                "id": 5,
                "gender": "Female",
                "first_name": "Rebecca",
                "last_name": "Davis",
                "email": "rdavis4@macromedia.com",
                "image": "http://lorempixel.com/100/100/people/5",
                "about": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
            }];
    };

    getResMenus(): any[] {
        return [
            {
                "name": "Veg"
                , "childs": [
                    {
                        "name": "Soup"
                        , "childs": [
                            {
                                "name": "tomato Soup"
                                , "childs": []
                            },
                            {
                                "name": "corn Soup"
                                , "childs": []
                            }

                        ]
                    }
                ]
            },
            {
                "name": "non-veg",
                "childs": [
                    {
                        "name": "starter"
                        , "childs": [
                            {
                                "name": "chicken lolipop"
                                , "childs": []
                            },
                            {
                                "name": "Chicken 65"
                                , "childs": []
                            }
                        ]

                    }
                ]
            }, {
                "name": "deserts",
                "childs": []
            }
        ];
    };
}