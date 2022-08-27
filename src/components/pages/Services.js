import React, {Component} from 'react';

class Services extends Component {
    state={
        loading: true,
        id:null,
    };

    async componentDidMount(){
        const url ="https://api.genderize.io/?name=scott";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({id:data.results[0], loading:false});
        console.log(data.results[0]);


    }
    render(){
        return(
            <div>
                {this.state.loading || !this.state.id? 
                (<div>loading</div>):
                (<div>{this.state.id}</div>)
            }
            </div>
        );
    }
   
}
export default Services;