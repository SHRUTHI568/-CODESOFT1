document.addEventListener("DOMContentLoaded", function() {
    // Create a <style> element
    const style = document.createElement('style');
    style.type = 'text/css';

    // Define the keyframes and other CSS rules
    const keyframes = `
        @keyframes slide-up {
            0% {
                transform: translateY(100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        .animate {
            animation: fade-in 1s ease-in, slide-up 1s ease-in;
        }
    `;

    // Add the keyframes and CSS rules to the <style> element
    style.innerHTML = keyframes;

    // Append the <style> element to the <head> of the document
    document.head.appendChild(style);

    let contentIndex = 0;
    let changeCount = 0;
    const maxChanges = 4;
    const contentText1 = document.getElementById('changecontent1');
    const contentText2 = document.getElementById('changecontent2');
    const contentText3 = document.getElementById('changecontent3');

    const contents1 = [
        'WE ARE CREATIVE',
        'WE ARE THE BEST',
        'WE MAKE YOU STAND OUT'
    ];
    const contents2 = [
        'CREATIVE DIGITAL AGENCY',
        'WEB DESIGN STUDIO',
        'INNOVATIVE MARKETING FIRM'
    ];
    const contents3 = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corrupti! Rerum distinctio totam labore nulla recusandae culpa.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad distinctio laudantium obcaecati nam et reiciendis!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut magnam hic ipsum optio voluptatum numquam'
    ];

    function changeContent() {
        if (changeCount < maxChanges) {
            // Remove the animate class to reset the animations
            contentText1.classList.remove('animate');
            contentText2.classList.remove('animate');
            contentText3.classList.remove('animate');

            setTimeout(() => {
                contentText1.innerHTML = contents1[contentIndex];
                contentText2.innerHTML = contents2[contentIndex];
                contentText3.innerHTML = contents3[contentIndex];

                // Trigger reflow to restart the animations
                void contentText1.offsetWidth;
                void contentText2.offsetWidth;
                void contentText3.offsetWidth;

                // Add the animate class to start the animations
                contentText1.classList.add('animate');
                contentText2.classList.add('animate');
                contentText3.classList.add('animate');

                contentIndex = (contentIndex + 1) % contents1.length;
                changeCount++;
            }, 500); // Wait for the fade out to complete
        } else {
            var hidden=document.getElementById("hidden");
            hidden.classList.add('hide')
            clearInterval(interval); // Clear the interval after 3 changes
        }
    }

    changeContent();
    const interval = setInterval(changeContent, 3500); // Change content every 3.5 seconds
});
