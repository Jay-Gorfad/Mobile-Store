<?php include('header.php'); ?>
    <div class="container sitemap">
        <p>
            <a href="index.php" class="text-decoration-none dim link">Home /</a>
            <a href="cart.php" class="text-decoration-none dim link">Cart /</a> 
            Checkout
        </p>
    </div>
    <div class="container">
        <h2 class="mb-4">Billing Details</h2>
        <div class="row g-5">
            <div class="col-md-6">
                <div class="mb-4">
                    <form action="" class="billing-details form">
                        <div class="row gx-2 gy-3">
                            <div class="col-12 col-sm-6">
                                <label for="firstName" class="form-label">First Name<span class="required">*</span></label>
                                <input type="text" id="firstName" class="w-100" required>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label for="lastName" class="form-label">Last Name<span class="required">*</span></label>
                                <input type="text" id="lastName" class="w-100" required>
                            </div>
                            <div class="col-12 col-sm-12">
                                <label for="streetAddress" class="form-label">Street Address<span class="required">*</span></label>
                                <textarea id="streetAddress" class="w-100" rows="2" required></textarea>
                            </div>
                            <div class="col-12 col-sm-12">
                                <label for="apartment" class="form-label">Apartment, Floor, etc. (Optional)</label>
                                <textarea id="apartment" class="w-100" rows="2"></textarea>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label for="city" class="form-label">City<span class="required">*</span></label>
                                <input type="text" id="city" class="w-100" required>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label for="state" class="form-label">State<span class="required">*</span></label>
                                <input type="text" id="state" class="w-100" required>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label for="pinCode" class="form-label">Pin code<span class="required">*</span></label>
                                <input type="text" id="pinCode" class="w-100" required>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label for="phone" class="form-label">Phone<span class="required">*</span></label>
                                <input type="text" id="phone" class="w-100" required>
                            </div>
                            <div class="col-12">
                                <div>
                                    <input type="checkbox" id="saveInfo">
                                    <label for="saveInfo" class="form-label ms-1">Save this information for faster check-out next time</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mt-4 line mb-4"></div>
            </div>
            <div class="col-md-6 font-black checkout">
                <div class="mb-2">
                    <div class="d-flex align-items-center p-2">
                        <img src="img/products/phone.png" class="checkout-image" alt="OnePlus Phone">
                        <div class="item-name ms-2">OnePlus Phone</div>
                        <div class="price">₹40,000.00</div>
                    </div>
                </div>
                <div class="d-flex align-items-center p-2">
                    <div>Subtotal:</div>
                    <div class="price">₹40,000.00</div>
                </div>
                <div class="my-2 line"></div>
                <div class="d-flex align-items-center p-2">
                    <div>Shipping:</div>
                    <div class="price">₹100.00</div>
                </div>
                <div class="my-2 line"></div>
                <div class="d-flex align-items-center p-2">
                    <div>Total:</div>
                    <div class="price">₹40,100.00</div>
                </div>
                <div class="mt-2">
                    <!-- <div class="mb-3">
                        <input type="radio" name="payment-choice" id="paymentBank">
                        <label for="paymentBank" class="ms-1 form-label m-0">Bank</label>
                    </div> -->
                    <!-- <div class="mb-3">
                        <input type="radio" name="payment-choice" id="paymentCOD">
                        <label for="paymentCOD" class="ms-1 form-label m-0">Cash on Delivery</label>
                    </div> -->
                </div>
                <div class="d-flex justify-content-end">
                    <input type="submit" value="Pay Now" class="btn-msg mt-2">
                </div>
            </div>
        </div>
    </div>
<?php include('footer.php'); ?>
