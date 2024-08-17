<?php include('header.php'); ?>
<div class="container sitemap">
    <p class="my-5"><a href="index.php" class="text-decoration-none highlight link">Home /</a> Shop</p>
    <div class="row justify-content-start">
        <?php display_products(); ?>
    </div>
</div>
<?php include('footer.php'); ?>

<?php
    function display_products() {
        for($i=1;$i<=8;$i++) {
            echo '
            <div class="col-md-3 gap col-sm-4 p-2 col-6">
                <div class="card">
                    <div class="product-image">
                        <img class="img-thumbnail p-4" src="img/products/15Plus.jpg" alt="Card image cap">
                        <div class="like"><i class="fa-regular fa-heart"></i></div>
                        ';
                        if($i % 3 == 0) {
                            echo '<div class="label">New</div>';
                        }
                        echo '
                    </div>
                    <div class="card-body product-body px-3">
                        <h6 class="card-title">Phone</h6>
                        <div class="d-flex justify-content-between align-items-end mb-2">
                            <div>
                                <span class="price">₹100.00</span>
                                <span class="striked-price">₹150.00</span>
                            </div>
                        </div>
                        <div class="rating-section mb-2">
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="review-count ps-1">(95)</div>
                        </div>
                        <a class="order-link cart-btn" href="cart.php"><i class="fa-solid fa-cart-shopping pe-2"></i>Add to cart</a>
                    </div>
                </div>
            </div>
            ';
        }
    }
?>
