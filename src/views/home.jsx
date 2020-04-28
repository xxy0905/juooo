import  React  from  'react'
import  axios from  'axios'
class home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>home</div>
        )
    }
    async componentDidMount(){
        const  {data}=await  axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
        console.log(data)
    }
} 
export default home