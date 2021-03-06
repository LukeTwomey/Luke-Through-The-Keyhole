<!DOCTYPE html>
<html>
    <head>
        <?php include("head.php"); ?>
    </head>

    <body>
        <div id="fouc">
            <div class="site-wrap">
                <?php include("header.php"); ?>

                <!-- Add page content here -->
                <div class="page-content contact">
                    <div class="contact-form">
                        <h1>Contact</h1>
                        <p>Send me a message while I'm on my travels!</p>
                        <form class="contactForm" method="post" name="contactForm">
                            <input id="name" name="name" required placeholder="Name" type="text"/>
                            <input id="email" name="email" required placeholder="E-mail" type="email"/>
                            <input name="subject" value=" has sent a new message" type="hidden"/>
                            <textarea id="message" name="message" required rows="3" placeholder="Message"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>

                    <div class="contact-image">
                        <img src="images/contact.jpg"/>
                    </div>
                </div>

                <img class="back-to-top hidden" src="images/icons/up-arrow.jpg"/>
                <?php include("footer.php"); ?>
            </div>
        </div>

        <?php include("javascript-files.php"); ?>
    </body>
</html>
