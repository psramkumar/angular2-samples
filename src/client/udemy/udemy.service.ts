export class UdemyService{
	
	getCourses():string[]{
		return ['course1','course2','course3'];
	}
    
    getResMenus():any[]{            
        return [
            {
                'name':'Veg'
                ,'childs':[
                    {
                    'name':'Soup'
                        ,'childs':[
                            {
                                'name':'tomato Soup'
                                ,'childs':[]  
                            },
                            {
                                'name':'corn Soup'
                                ,'childs':[]  
                            }

                        ]   
                    }
                ]
            },
            {
                'name':'non-veg',
                'childs':[
                    {
                        'name':'starter'
                        ,'childs':[
                            {
                                'name':'chicken lolipop'
                                ,'childs':[]                           
                            },
                            {
                                'name':'Chicken 65'
                                ,'childs':[]                              
                            }
                        ]
                        
                    }
                ]
            },{
                'name':'deserts',
                'childs':[]
            }
        ];
    }
}