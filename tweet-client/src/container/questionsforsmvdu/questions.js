import React ,{Component} from 'react'
import Question from '../../components/questions/questions'

class Questions extends Component{

    state={
        show:false,
        sem:'',
    }

    Clicked(e){
        alert("This is from first semester")
        console.log(e.target.name)
        this.setState({
            show:true,
            sem:e.target.name
        })
    };

 minor1(e){
     alert("This is from minor 1")
 }
 minor2(e){
    alert("This is from minor 2")
}
minor3(e){
    alert("This is from minor 3")
}
    
    render(){
        console.log(this.state)
        if(this.state.show){
            return(<div>
                    <div><Question name="Minor1" clicked={this.minor1}/></div>
                    <div><Question name="Minor2"  clicked ={this.minor2}/></div>
                    <div><Question name="Minor3"  clicked ={this.minor2}/></div>
                </div>
        )
        } else{
            return (
                <div>
                    <button name="firstsemester"    onClick={(event)=>this.Clicked(event) }>FirstSemester    </button>
                    <button name="secondsemester"   onClick={(event)=>this.Clicked(event) }>SecondSemester   </button>
                    <button name="thirdsemester"    onClick={(event)=>this.Clicked(event) }>ThirdSemester    </button>
                    <button name="fourthsemester"   onClick={(event)=>this.Clicked(event) }>FourthSemester   </button>
                    <button name="fifthsemester"    onClick={(event)=>this.Clicked(event) }>FifthSemester    </button>
                    <button name="sixsemester"      onClick={(event)=>this.Clicked(event) }>SixSemester      </button>
                    <button name="seventhsemester"  onClick={(event)=>this.Clicked(event) }>SeventhSemester  </button>
                    <button name="eigthsemester"    onClick={(event)=>this.Clicked(event) }>EigthSemester    </button>
                </div>
                
            )
        }
    }

}

export default Questions;