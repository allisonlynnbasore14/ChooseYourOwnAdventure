



var user1 = prompt("You are walking down the NYC side walk and a man appraochs. He is dressed in a suit. He slides a cell phone into your hand as he brushes past you. He glancecs over his sholder as he walks briskly away. You notice a twinkle in his eye. Do you, THROW the phone back at him, OPEN the phone, or WAIT to do anything with the phone?");

user1 = user1.toLowerCase()
switch(user1){
    case('open'):
        var user2 = prompt("You open the phone to see a backgroud with a strange logo that looks vaguely familar. It is a large golden S in a circle. A message pops up that says 'You are being watched' Do you, PUT away the phone, CALL the police, MESSAGE the number that just texted you");
        break;
        
    case('throw'):
        var user2 = prompt("You throw the phone at him. He reachs and catches it in midair and swiftly pulls it under his coat, his moves are like a magician. He grins at you for an instant, as if to say 'I thought you would do that' before he turns around and briskly walks onward. Do you KEEP walking or CALL the police?");
        break;
        
    default:
        var user2 = prompt("You wait to do anything with the phone until you get home. When you do finally get home you realise you might have made a huge mistake. The phone could be tracked or could be a bomb! You quickly pull out the phone and unscrew the back. You used to be a cell phone salesman so you know what the inside should look like. Everything appers normal, but it is still possible to track its location. You notice it has a message. It reads 'We need your coorpoertation, you and your city are in danger.' Do you TAKE the message to the police, THROW the phone away, MESSAGE the texter back?");
        break;
    
    }


user2 = user2.toLowerCase()

switch(user2){
    case('call'):
         var user3 = police();
        break;
    case('take'):
         var user3 = police();
        break;
    case('throw'):
        var user3 = prompt("You are not about to put yourself in danger. You go ouside to the nearest dumpster and do your best basketball shot to swoosh the phone into the trash. As you walk away the stanger's face flashes through your mind. He looked kind of familar...The next day you hear a knock at your door. Do you OPEN it or CALL the police");
        break;
        
    case('message'):
        var user3 = prompt( "You message the number back. You say, 'Who is this? I will go to the police!'You get an instant reply back that says 'The police are involved. You will be jailed. Go to 1329 Baker Street and knock on the door. Hurry.' Do you GO to the address or CALL the police anyways?");
        break;

    case('keep'):
        var user3 = prompt( "As you walk away the stanger's face flashes through your mind. He looked kind of familar...The next day you hear a knock at your door. Do you OPEN it or CALL the police");
        break;
    case('put'):
    	var user3 = prompt("You wait to do anything with the phone until you get home. When you do finally get home you realise you might have made a huge mistake. The phone could be tracked or could be a bomb! You quickly pull out the phone and unscrew the back. You used to be a cell phone salesman so you know what the inside should look like. Everything appers normal, but it is still possible to track its location. You notice it has a message. It reads 'We need your coorpoertation, you and your city are in danger.' Do you TAKE the message to the police, THROW the phone away, MESSAGE the texter back?")
        break;
    default:
            var user3 = prompt("You wait to do anything with the phone until you get home. When you do finally get home you realise you might have made a huge mistake. The phone could be tracked or could be a bomb! You quickly pull out the phone and unscrew the back. You used to be a cell phone salesman so you know what the inside should look like. Everything appers normal, but it is still possible to track its location. You notice it has a message. It reads 'We need your coorpoertation, you and your city are in danger.' Do you TAKE the message to the police, THROW the phone away, MESSAGE the texter back?")
            break;
    }





	user3 = user3.toLowerCase();

switch(user3){
    case('run'):
    //RUNNING FROM THE POLICE
        var user4 = prompt("This is too sketchy you think. Maybe the guy who gave me the cell phone was right. Before you meet with the detective, you ask the recepcionits to show you the restroom. The recepcionits looks at you for a moment before takeing you the restroom. Once you are alone you pry open the window and squeeze out of it. You dust off the leaves of the bush you just landed in and start to run. Then, suddenly, before you know what is happening, hands grab your arms. You recognize the person grabbing you to be the man with the cell phone as he pulls you behind a tree. Do you SCREAM or WAIT for him to explain himself?");
        break;

     //TALK TO THE POLICE
    case('talk'):
        var user4 = prompt("Your parents always told you to respect law enforcement, so you ignore any red flags and meet Detective S in an intergation room with a two-way mirror. You tell him everything that has happened. His body language tells you he is hiding something, but he assures you that this whole situation is nothing to worry about. However, as you are leaving the room, hands suddenly grap you. Before you know it you are in handcuffs and put in a cell. Do you scream your head off and cause a SCENE or SIT quietly and wait to get your phone call?");
        break; 

     //TAKE THE PHONE TO THE POLICE
    case('take'):
     	var user4 = police();
     	break;
    case('call'):
        var user4 = police();
        break;

     //THROW THE PHONE AWAY
    case('throw'):
        var user4 = prompt("You are not about to put yourself in danger. You go ouside to the nearest dumpster and do your best basketball shot to swoosh the phone into the trash. As you walk away the stanger's face flashes through your mind. He looked kind of familar...The next day you hear a knock at your door. Do you OPEN it or CALL the police");
        break;
     case('message'):
     //MESSAGE THE TEXTER
        var user4 = prompt( "You message the number back. You say, 'Who is this? I will go to the police!'You get an instant reply back that says 'The police are involved. You will be jailed. Go to 1329 Baker Street and knock on the door. Hurry.' Do you GO to the address or CALL the police anyways?");
        break;
     case('open'):
     //OPEN THE DOOR
     	var user4 = prompt("You grab a nearby candle stick as a weapon and peep the door open. You see a man in a black hoody, and you can see the man's face as the one who gave you the cell phone. You demand 'What do you want!' 'You are in danger,' he says. 'I know you have no reason to trust me. But you have to believe me. You are not who you think you are. Trust no one. You and your city are in danger, come to 1329 Baker Street tonight at midnight.' He then leaves in a flash. Do you GO to Baker Street or do you CALL the police.");
     	break;

     case('go'):
     //GO TO THE ADRESS
     	var user4 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
     	break;
        default:
                var user4 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain...'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;

     }







//ALL THE ABOVE IS GOOD!

    user4 = user4.toLowerCase()
    switch(user4){
     case('go'):
     //GO TO THE ADRESS
        var user5 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    //TAKE THE PHONE TO THE POLICE
     case('call'):
        var user5 = police();
        break;
    //TAKE THE PHONE TO THE POLICE
     case('take'):
        var user5 = police();
        break;

    //SCREAM AT GUY BEHIND TREE 
    case('scream'):
        var user5 = prompt("You scream as loud as you can for a good 2 seconds before the man puts his hand over your mouth. 'They will hear you! What are you doing? You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;

    //WAIT FOR GUY BEHIND TREE 
    case('wait'):
        var user5 = prompt("You wait for him to explain what his probelm is. He looks relieved that you are not screaming. He says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;

    //CAUSE A SCENE IN JAIL CELL
    case('scene'):
        var user5 = prompt("You start to scream and banging the bench against the wall. The other immates are starring at you. After two hours of this you pass out from exhuastion. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out --you do not have much of a choice.--?")
        break;


    //SIT IN JAIL CELL
    case('sit'):
        var user5 = prompt("The other immates are starring at you. After three hours of staring at the wall you fall asleep. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out (you do not have much of a choice.)?")
        break;

     //TALK TO THE POLICE
     case('talk'):
        var user5 = prompt("Your parents always told you to respect law enforcement, so you ignore any red flags and meet Detective S in an intergation room with a two-way mirror. You tell him everything that has happened. His body language tells you he is hiding something, but he assures you that this whole situation is nothing to worry about. However, as you are leaving the room, hands suddenly grap you. Before you know it you are in handcuffs and put in a cell. Do you scream your head off and cause a SCENE or SIT quietly and wait to get your phone call?");
        break; 

    case('run'):
    //RUNNING FROM THE POLICE
        var user5 = prompt("This is too sketchy you think. Maybe the guy who gave me the cell phone was right. Before you meet with the detective, you ask the recepcionits to show you the restroom. The recepcionits looks at you for a moment before takeing you the restroom. Once you are alone you pry open the window and squeeze out of it. You dust off the leaves of the bush you just landed in and start to run. Then, suddenly, before you know what is happening, hands grab your arms. You recognize the person grabbing you to be the man with the cell phone as he pulls you behind a tree. Do you SCREAM or WAIT for him to explain himself?");
        break;

    case('open'):
     //OPEN THE DOOR
        var user5 = prompt("You grab a nearby candle stick as a weapon and peep the door open. You see a man in a black hoody, and you can see the man's face as the one who gave you the cell phone. You demand 'What do you want!' 'You are in danger,' he says. 'I know you have no reason to trust me. But you have to believe me. You are not who you think you are. Trust no one. You and your city are in danger, come to 1329 Baker Street tonight at midnight.' He then leaves in a flash. Do you GO to Baker Street or do you CALL the police.")
        break;

    //BELIEVE HIM
    case('believe'):
        var user5 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?")
        break;
    //Go outside
    case('out'):
        var user5 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    default:
            var user5 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;
}


user5 = user5.toLowerCase();



switch(user5){
    case('out'):
        var user6 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user6 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    // YOU RUN FROM THE POLICE
    case('run'):
        var user6 = prompt("This is too sketchy you think. Maybe the guy who gave me the cell phone was right. Before you meet with the detective, you ask the recepcionits to show you the restroom. The recepcionits looks at you for a moment before takeing you the restroom. Once you are alone you pry open the window and squeeze out of it. You dust off the leaves of the bush you just landed in and start to run. Then, suddenly, before you know what is happening, hands grab your arms. You recognize the person grabbing you to be the man with the cell phone as he pulls you behind a tree. Do you SCREAM or WAIT for him to explain himself?");
        break;
        
    // YOU TALK TO THE POLICE
    case('talk'):
        var user6 = prompt("Your parents always told you to respect law enforcement, so you ignore any red flags and meet Detective S in an intergation room with a two-way mirror. You tell him everything that has happened. His body language tells you he is hiding something, but he assures you that this whole situation is nothing to worry about. However, as you are leaving the room, hands suddenly grap you. Before you know it you are in handcuffs and put in a cell. Do you scream your head off and cause a SCENE or SIT quietly and wait to get your phone call?");
        break;

    // YOU CLIMB OUT OF JAIL
    case('climb'):
        var user6 = prompt("You climb up the rope. You are super strong and it was easy to climb up. Once you get out, the man says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me to Baker Street.' You figure that you are alredy a criminal and figure what the heck. Click OK to conitnue.");
        break;
    //YOU CAUSE A SCENE IN JAIL
    case('scene'):
        var user6 = prompt("You start to scream and banging the bench against the wall. The other immates are starring at you. After two hours of this you pass out from exhuastion. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out --you do not have much of a choice.--?")
        break;

    //YOU SIT IN JAIL
    case('sit'):
        var user6 = prompt("The other immates are starring at you. After three hours of staring at the wall you fall asleep. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out (you do not have much of a choice.)?")
        break;


    //YOU GO WITH HIM TO BAKER STREET
    case('go'):
        var user6 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    //YOU GO HOME AFTER THE TREE
    case('home'):
        var user6 = prompt("You sprint off running for home. This is too wierd. As soon as you get home, you pinch yourself to make sure you are not dreaming...and then you wake up. It was a dream after all...THE END");
        break;
        
    //YOU agree to help him
    case('help'):
        var user6 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user6 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;

    //YOU Call the police
    case('call'):
        var user6 = police();
        break;

    //YOU scream behind the tree
    case('scream'):
        var user6 = prompt("You scream as loud as you can for a good 2 seconds before the man puts his hand over your mouth. 'They will hear you! What are you doing? You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;

    //YOU wait behind the tree
    case('wait'):
        var user6 = prompt("You wait for him to explain what his probelm is. He looks relieved that you are not screaming. He says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;   

    default:
        var user6 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    }


user6 = user6.toLowerCase



switch(user6){
    case('out'):
        var user7 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user7 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    // YOU RUN FROM THE POLICE
    case('run'):
        var user7 = prompt("This is too sketchy you think. Maybe the guy who gave me the cell phone was right. Before you meet with the detective, you ask the recepcionits to show you the restroom. The recepcionits looks at you for a moment before takeing you the restroom. Once you are alone you pry open the window and squeeze out of it. You dust off the leaves of the bush you just landed in and start to run. Then, suddenly, before you know what is happening, hands grab your arms. You recognize the person grabbing you to be the man with the cell phone as he pulls you behind a tree. Do you SCREAM or WAIT for him to explain himself?");
        break;
        
    // YOU TALK TO THE POLICE
    case('talk'):
        var user7 = prompt("Your parents always told you to respect law enforcement, so you ignore any red flags and meet Detective S in an intergation room with a two-way mirror. You tell him everything that has happened. His body language tells you he is hiding something, but he assures you that this whole situation is nothing to worry about. However, as you are leaving the room, hands suddenly grap you. Before you know it you are in handcuffs and put in a cell. Do you scream your head off and cause a SCENE or SIT quietly and wait to get your phone call?");
        break;

    // YOU CLIMB OUT OF JAIL
    case('climb'):
        var user7 = prompt("You climb up the rope. You are super strong and it was easy to climb up. Once you get out, the man says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me to Baker Street.' You figure that you are alredy a criminal and figure what the heck. Click OK to continue.");
        break;
    //YOU CAUSE A SCENE IN JAIL
    case('scene'):
        var user7 = prompt("You start to scream and banging the bench against the wall. The other immates are starring at you. After two hours of this you pass out from exhuastion. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out --you do not have much of a choice.--?")
        break;

    //YOU SIT IN JAIL
    case('sit'):
        var user7 = prompt("The other immates are starring at you. After three hours of staring at the wall you fall asleep. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out (you do not have much of a choice.)?")
        break;


    //YOU GO WITH HIM TO BAKER STREET
    case('go'):
        var user7 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    //YOU GO HOME AFTER THE TREE
    case('home'):
        var user7 = prompt("You sprint off running for home. This is too wierd. As soon as you get home, you pinch yourself to make sure you are not dreaming...and then you wake up. It was a dream after all...");
        break;
        
    //YOU agree to help him
    case('help'):
        var user7 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user7 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;


    //YOU scream behind the tree
    case('scream'):
        var user7 = prompt("You scream as loud as you can for a good 2 seconds before the man puts his hand over your mouth. 'They will hear you! What are you doing? You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;

    //YOU wait behind the tree
    case('wait'):
        var user7 = prompt("You wait for him to explain what his probelm is. He looks relieved that you are not screaming. He says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;   

    default:
        var user7 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    }




user7 = user7.toLowerCase



switch(user7){
    case('out'):
        var user8 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user8 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    // YOU CLIMB OUT OF JAIL
    case('climb'):
        var user8 = prompt("You climb up the rope. You are super strong and it was easy to climb up. Once you get out, the man says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me to Baker Street.' You figure that you are alredy a criminal and figure what the heck. Click OK to continue.");
        break;
    //YOU CAUSE A SCENE IN JAIL
    case('scene'):
        var user8 = prompt("You start to scream and banging the bench against the wall. The other immates are starring at you. After two hours of this you pass out from exhuastion. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out --you do not have much of a choice.--?")
        break;

    //YOU SIT IN JAIL
    case('sit'):
        var user8 = prompt("The other immates are starring at you. After three hours of staring at the wall you fall asleep. You wake up and its the middle of the night. Suddenly you feel hands around your mouth. You turn and see the man with the cell phone from earlier. He points to the pried open tiny window in the ceiling and too the rope hanging down. Do you CLIMB out or do you CLIMB out (you do not have much of a choice.)?")
        break;


    //YOU GO WITH HIM TO BAKER STREET
    case('go'):
        var user8 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    //YOU GO HOME AFTER THE TREE
    case('home'):
        var user8 = prompt("You sprint off running for home. This is too wierd. As soon as you get home, you pinch yourself to make sure you are not dreaming...and then you wake up. It was a dream after all...");
        break;
        
    //YOU agree to help him
    case('help'):
        var user8 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user8 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;


    //YOU scream behind the tree
    case('scream'):
        var user8 = prompt("You scream as loud as you can for a good 2 seconds before the man puts his hand over your mouth. 'They will hear you! What are you doing? You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;

    //YOU wait behind the tree
    case('wait'):
        var user8 = prompt("You wait for him to explain what his probelm is. He looks relieved that you are not screaming. He says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me.' Do you GO with or go HOME?")
        break;   

    default:
        var user8 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    }




user8 = user8.toLowerCase



switch(user8){
    case('out'):
        var user9 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user9 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    // YOU CLIMB OUT OF JAIL
    case('climb'):
        var user9 = prompt("You climb up the rope. You are super strong and it was easy to climb up. Once you get out, the man says,' You are not who you think you are. They are lying to you. You are not safe here. Come with me to Baker Street.' You figure that you are alredy a criminal and figure what the heck. Click OK to continue.");
        break;




    //YOU GO WITH HIM TO BAKER STREET
    case('go'):
        var user9 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    //YOU GO HOME AFTER THE TREE
    case('home'):
        var user9 = prompt("You sprint off running for home. This is too wierd. As soon as you get home, you pinch yourself to make sure you are not dreaming...and then you wake up. It was a dream after all...");
        break;
        
    //YOU agree to help him
    case('help'):
        var user9 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user9 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;



    default:
        var user9 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    }






user9 = user9.toLowerCase



switch(user9){
    case('out'):
        var user10 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user10 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    //YOU agree to help him
    case('help'):
        var user10 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user10 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;



    default:
        var user10 = prompt("You never trusted the police, so you go to address at midnight. This time you take a handgun with you. As you sneak up to the house you realise it looks vaguely familar. Wierd. This is happening a lot lately. You knock on the back door and a woman answers. 'Thank Goodness your here' she says. You come inside. There are over 15 people sitting around, looking worried. The man from before is there as well. He starts to explain... 'This will be hard to take in at first, but bare with me' he says. 'You are not who think you are. You were hypnotize by the governemnt. You are actually a special investigator...named Detective S...you have been missing for 3 years.' Do you BELIEVE him, or run OUT?")
        break;
    }





user10 = user10.toLowerCase



switch(user10){
    case('out'):
        var user11 = prompt("You go outside. Not sure what to think about what you just heard. Then you see them. The sirens. The police surround you and put you in handcuffs. 'What did I do you screem!' To be continued......")
        break;

    // You believe him
    case('believe'):
        var user11 = prompt("Three years ago, you had been in a car crash and lost your memory...or at least you thought you had. What he was saying started to make a little sense. He goes on to say, 'I will explain more later, for now, we need to make a game plan. They are planning something. They found out that thier privious methods were wearing off after three years. They are trying to cover up what happened...Will you help us?' Do you HELP him or do you ASK more questions?");
        break;

    //YOU agree to help him
    case('help'):
        var user11 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user11 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;



    default:
        var user11 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;
    }

user11 = user11.toLowerCase



switch(user11){

    //YOU agree to help him
    case('help'):
        var user11 = prompt("You agree to help him. This makes so much sense and you are not one to stand for injustice! Everyone in the room gathers around the nearby table, when there is a pounding knock at the door...to be continued");
        break;

    //YOU ask him more questions
    case('ask'):
        var user11 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;

    default:
        var user11 = prompt("But why me? You ask. Becasue... he was mid sentence when there was a loud knock at the door...To be continued");
        break;

            }

//     case('put'):
//         var user5 = prompt("You wait to do anything with the phone until you get home. When you do finally get home you realise you might have made a huge mistake. The phone could be tracked or could be a bomb! You quickly pull out the phone and unscrew the back. You used to be a cell phone salesman so you know what the inside should look like. Everything appers normal, but it is still possible to track its location. You notice it has a message. It reads 'We need your coorpoertation, you and your city are in danger.' Do you TAKE the message to the police, THROW the phone away, MESSAGE the texter back?");
//         break;
        
//         case('call'):
//         var user6 = police();
//         break;
        
//     default:
//         var user7 = prompt("You pull over to the side of the sidewalk and message the number back. You say, 'Who is this? I will go to the police!'You get an instant reply back that says 'The police are involved. You will be jailed. Go to 1329 Baker Street and knock on the door. Hurry.' Do you GO to the address or CALL the police anyways?");
//         break;
    
//     }



//     user3 = user3.toLowerCase()

// switch(user3){
//     case('call'):
//         var user8 = police()
//         break;
        
//     default:
//         var user9 = prompt("You keep walking.You wait to do anything with the phone until you get home. When you do finally get home you realise you might have made a huge mistake. The phone could be tracked or could be a bomb! You quickly pull out the phone and unscrew the back. You used to be a cell phone salesman so you know what the inside should look like. Everything appers normal, but it is still possible to track its location. You notice it has a message. It reads 'We need your coorpoertation, you and your city are in danger.' Do you TAKE the message to the police, THROW the phone away, MESSAGE the texter back? ");
//         break;
    
//     }



    function police() {
     var policeanswer = prompt("You are about to call the police when you remember seeing a police station three blocks away. You go to the station and explain what happened to the recepcionits. He takes you immeditally to see a man named 'Detective S.' You realise something is wrong with how everyone is avoid eye contact with you. Do you RUN away or TALK to the detective?");
     	return policeanswer
			}
    


