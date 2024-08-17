<?php include('header.php') ?>
    <div class="container ">
        <div class=" d-flex justify-content-between sitemap">
            <p><a href="index.php" class="text-decoration-none dim link">Home /</a> Account</p>
            <p>Welcome! <span class="highlight">Username</span></p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            
            <div class="col-12 p-2">
                <div class="shadow-sm p-4">
                    <div id="my-profile" >
                        <p class="highlight title">Edit Your Profile</p>
                        <form action="" class="edit-profile form">
                            <div class="row g-2">
                                <div class="col-12 col-sm-6">
                                    <label for="" class="form-label">First Name</label>
                                    <input type="text" class="w-100" placeholder="Your Name*">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <label for="" class="form-label">Last Name</label>
                                    <input type="text" class="w-100" placeholder="Your Email*">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <label for="" class="form-label">Email</label>
                                    <input type="text" class="w-100" placeholder="Your Email*">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <label for="" class="form-label">Phone</label>
                                    <input type="text" class="w-100" placeholder="Your Phone*">
                                </div>
                            
                                <div class="col-12">
                                    <label for="" class="form-label">Password</label>
                                    <input type="text" class="w-100 mb-2" placeholder="Current password">
                                    <input type="text" class="w-100 mb-2" placeholder="New password">
                                    <input type="text" class="w-100 mb-2" placeholder="Confirm password">
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <input type="submit" value="Send Message" class="btn-msg mt-2 ">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

<?php include('footer.php'); ?>

