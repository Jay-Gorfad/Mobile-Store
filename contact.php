<?php include('header.php'); ?>
    <div class="container sitemap">
        <p><a href="index.php" class="text-decoration-none dim link">Home /</a> Contact</p>
    </div>
    <div class="container">
        <div class="row">
                <div class="col-12 col-md-4 p-3">
            <div class="shadow-sm p-4 rounded border">
                <h3 class="mb-4">Contact Information</h3>
                <p class="mb-3">We are available 24/7 to assist you. Reach out to us through the following methods:</p>
                <p class="mb-2"><strong>Phone:</strong> +8801611112222</p>
                <p class="mb-4"><strong>Email:</strong> customer@exclusive.com</p>
                <div class="line mb-3"></div>
                <p class="mb-1">For any inquiries or support, please fill out the contact form and we will get back to you within 24 hours.</p>
            </div>
        </div>

            <div class="col-12  col-md-8  p-2">
                <div class="shadow-sm p-4 row">
                    <form action="" class="col-12">
                        <div class="flex form">
                            <input type="text" placeholder="Your First Name*" class="flex-item">
                            <input type="text" placeholder="Your Last Name*" class="flex-item">
                        </div>
                        <div class="flex form">
                            <input type="text" placeholder="Your Email*" class="flex-item">
                            <input type="text" placeholder="Your Phone*" class="flex-item">
                        </div>
                        <div class="flex">
                            <textarea name="message" id="contactMessage" class="flex-item"  rows="7" placeholder="Your Message*"></textarea>
                        </div>
                        <div class="d-flex justify-content-end">
                            <input type="submit" value="Send Message" class="btn-msg mt-2">
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>
<?php include('footer.php') ?>