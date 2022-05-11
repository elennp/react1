import { createContext,useContext,useReducer } from "react";
import React from "react";

export const StateContext = createContext();
export const StateProvider = ({reducer,inicialState,children})=>( 
    <StateContext.Provider value={useReducer(reducer,inicialState)}>
    {children}
    </StateContext.Provider>
)
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
   
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
export const useStateValue= ()=> useContext(StateContext)
