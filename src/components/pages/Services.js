import React, {Component} from 'react';

class Services extends Component {

    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }

    componentDidMount(){
        fetch('https://openlibrary.org/api/volumes/brief/isbn/9780525440987.json')
        .then(res => res.json())
        .then(json =>{
            this.setState({
                isLoaded: true,
                items: json,
            })

        });
        
    }

    render(){

        var {isLoaded,items} = this.state;

        if(!isLoaded){
          return <div>Loading...</div>
           
        }
        else{
             return(
                <div>
                    <ul>
                        {items.map(item=>(
                            <li key={item.publishers} >
                                Name: {item.publishers}  
                            </li>
                        ))}
                    </ul>
                           
                 </div>
            );

        }


       
    }
}
export default Services;