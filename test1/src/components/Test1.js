//컴포넌트를 만드는 2가지 방법
//1.함수로 컴포넌트 만들기 <- 주로 이방법을 이용한다. rsc
//2.클래스로 컴포넌트 만들기 rcc
import React, { Component } from "react";

//클래스로 컴포넌트 만들기
class Test1 extends Component{

    render(){
        return(
        <div>
            클래스로 만든 컴포넌트            
        </div>
        );
    }
}

export default Test1;
