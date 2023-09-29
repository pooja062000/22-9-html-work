let moreButton = document.querySelectorAll('.more-info')
for (let i = 0; i < moreButton.length; i++){
    
    let allMoreButton = moreButton[i]

    //console.log('allMoreButton', allMoreButton)
 
allMoreButton.addEventListener('click', function(){
    let cartheading = allMoreButton.parentElement.querySelector('.hello').innerText
    let log = allMoreButton.parentElement.querySelector('.log').innerHTML

    document.querySelector('.graphic-text').innerText = cartheading
    document.querySelector('.modal_logo').innerHTML = log
    if(cartheading === 'Software'){
        document.querySelector('.des-text').innerText = `Software -----  Writing, reviewing, and maintaining source code is at the core of software development. Developers use programming languages like Python, Java, JavaScript,
         C++, and many others to create the logic and functionality of software applications.
         Developers design and implement algorithms to solve specific problems efficiently.`
        
    }else if(cartheading === 'Web Design'){
        document.querySelector('.des-text').innerText = `Web Design ----- Page Layout: The arrangement of content elements on a webpage, including headers, navigation menus, sidebars, and the main content area. 
        Grid Systems: Grids help maintain consistency and alignment in the design, making it easier for users to navigate and understand the content.`

    }else if(cartheading === 'Graphic Designs'){
        document.querySelector('.des-text').innerText = `Graphic Designs  -----  Graphic designers are responsible for creating the user interface (UI) and user experience (UX) of 
        a website or application. This includes designing layouts, navigation menus, buttons, and other interactive elements to ensure a visually pleasing and user-friendly design.`

    }else if(cartheading === 'Application'){
        document.querySelector('.des-text').innerText = `Application ----- Frontend developers work closely with designers to transform design mockups and wireframes into a functional UI.
         This includes designing the layout, placement of elements, and overall aesthetics of the application.`

    }else{
        document.querySelector('.des-text').innerText = `wrong input`
    }

    document.querySelector('.more-info-col').style.display = 'flex';
})
}

document.querySelector('#modal_close').addEventListener('click', function(){
    document.querySelector('.more-info-col').style.display = 'none';
})