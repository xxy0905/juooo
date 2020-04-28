import  React  from  'react'
import { Route, NavLink } from 'react-router-dom'
export  default  class   MyRouter  extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.router.map(v=>(
                            <div key={v.path}>
                            <Route  exact={v.exact}  path={v.path} component={v.component}></Route>
                        </div>
                    ))
                }
                <nav>
                    <NavLink exact to={'/'}>主页</NavLink>|
                    <NavLink to={'/cinema'}>影院</NavLink>|
                    <NavLink to={'/wallet'}>票夹</NavLink>|
                    <NavLink to={'/my'}>我的</NavLink>
                </nav>
            </div>
        )
    }
}