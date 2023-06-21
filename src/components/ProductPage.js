// App should render ProductPage
//ProductPage component should render 3 Reviews

/**
 * 
 * Two parameters for useEffect
 * 
 * Callback function
 * Dependency Array
 * 
 * useEffect is listening to those variables to see whn they change in order to run the callback function
 * 
 * An empty dependency array means we're not watching anyhting!
 * - the only time useEffect will run when the component mounts (the first time the component comes onto the screen)
 * 
 * 
 * If the second parameter is undefined 
 *          it RETURNS undefined
 * useEffect will execute @ EVERY re-render
 *      !!!!!!!!!!!!!!!!! DO NOT FORGET YOUR SECOND PARAMETER
 * 
 * 
 * What does undefeined mean:
 *      - there's nothing passed in 
 * useEffect ( () => {, aVariableThatDoesntExist} )
 * 
 * 
 * 
 * 
 * Example of useEffect that relies on something updating
 * Simon's contrived example
 * 
 * 
 * Shopping Cart with a
 * Timer
 * You have 10 minutes to check out
 * When the timer runs out, we should redirect the user (disappear the shopping cart, show an error message)
 * 
 * - CheckoutPage
 * -ShoppingCartList
 * -Timmer (state:number of milliseconds left)
 *      state (numOfSeconds): updates every second
 *      onces it hits 0 seconds
 *          call a callback function defined in CheckoutPage passed into Timer as a prop
 *          Triggers a bunch of changes in CheckoutPAge: ShoppingCartList disappears, ErrorMessage component renders, Timer disappears
 * 
 * 
 * 
 * if you are trying to retrieve initial data from an API use useEffect
 * 
 * if you are using an API call as an event as part of handling an event -- don't need to use useEffect
 * 
 * 
 * props I don't really expect to change within the component state I expect change within the component and I will update that piece of state
 * 
 */