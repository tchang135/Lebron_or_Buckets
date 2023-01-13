# *__Lebron or Buckets__*    



### **Background**
Lebron or Buckets is a HTML/Javascript game that simulates the classic arcade basketball shooting game. In this iteration, your opponent is none other than NBA star Lebron James. The player has 1 minute to score as many points as possible by shooting the basketball in the hoop. At the end of the 1 minute, the player must have a score higher than Lebron's score in order to win.    

     
    
### **Functionality & MVPs:** 

- Player is able to use their mouth to properly interact with the basketball object
- Buttons to start the game, and restart once the game ends 
- Upon starting or finishing a game, a message/image will appear in the API
- A counter will indicate the player's current score 
- Proper interactions between objects based on physics engine 'Matter-js'
- Separate buttons to mute musical audio and gameplay audio(i.e. sound effects when the ball goes into the hoop)
   
   
Additional files:
- Backend code for scorekeeping 
- This production README
- Instructions of the game 
- Folder with wireframe images      
      



     
### **Wireframe**
Each wireframe is attached with a label or box that describes what will be displayed:        

![alt text](/wireframe_image/Homepage.png)
- Personal links: Github/LinkedIn Links, outside of my API 
- API: Will be generated and displayed using Canvas API, will contain all objects of my project other than personal links
- Audio functions: Buttons that control music audio and sound effect audio 
- Title/Instructions and Description: The title of the game along with a brief description on how to play 
- Start Button: Starts the game and instantiates the timer 


![alt text](/wireframe_image/playing.png)
- Scoreboards: Keeps track of the player's current score along with the score needed to win
- Hoop: Object that will have physics properties. Any time the ball enters this hoop, points will be added to the user's current score. If the ball hits the rim, a proper physics interaction should occur. 
- Basketball: Object that will have physics properties. The ball is controlled by the player's cursors and will be used depending on how much the direction the cursor is moved while interacting with the ball. Interaction is based on when the player 'clicks' on the ball and 'unclicks' the ball. 
- Timer: Once the player hits the Start Button, the timer will start shortly after. Starting at 60, the timer will go down to 00. Once the timer hits 0, the game will end.       
    
        
          
           
           

![alt text](/wireframe_image/gameover.png)     
- Gameover Message: Will indicate to the player if they won or loss the game, display their current score and the score required to win
- Play Again Button: The player will be able to click this button and the game will reset, allowing them to attempt again.       
         
             
   
    

### **Technologies, Libraries, APIs:**
This project will have the following technologies:
- Canvas API to render the basketball, the hoop, the scoreboard, and any images/text that would appear depending on specific actions
- Matter-js library to handle and code the physics that goes into the functionality of the game
- Webpack to bundle the source Javascript code into one file 
- npm to manage project dependencies       
     
           
     


       
### **Implementation Timeline** 
_Friday:_ 
- Getting more familiar with Matter-js library 
- Setting up general framework of index.html 
- Try to get objects with proper physics load in my browswer
- Create the skeleton of my project 
        
_Weekend:_ 
- Getting more familiar with Matter-js library 
- Create the proper objects that interact with physics(i.e. Basketball, hoop)
- Allowing these objects to properly interact with physics 
- Creating a working scoreboard that keeps track of the player's current score 
     
_Tuesday:_ 
- Create a timer that begins to count down once the game begins, and ends the game once it reaches "00"
- Create a 'score to beat' adjacent to the user's current score
- Add starting and ending message before and after the game
      
_Wednesday:_
- Add functionality to buttons or links(Github link, LinkedIn link, buttons with functionality, etc.)
- Adding images/skins to my objects and audio to the game to make it more entertaining/visually appealing
- Add the starting description and title message before clicking the 'start' button 
     
_Thursday:_
- Ensure full functionality of game
- Polishing UI/UX of the game 
       
_Bonus:_ 
- Create funtionality where at 20-30 secons, the hoop will begin to move 
- The messages that appear have more style to it(i.e. images, more loud text styling, effects)
- Levels of difficulty that increase the score required in order to win