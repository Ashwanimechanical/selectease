import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";
import FeaturedCategories from "../../component/FeaturedCategories/FeaturedCategories";
import TopRatedProducts from "../../component/TopRatedProducts/TopRatedProducts";
import TopReviewedSection from "../../component/TopReviewedSection/TopReviewedSection";
import ComparisonTables from "../../component/ComparisonTables/ComparisonTables";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import TestimonialsSection from "../../component/TestimonialsSection/TestimonialsSection";
import BlogHighlights from "../../component/BlogHighlights/BlogHighlights";

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Categories Section */}
            <FeaturedCategories />

            {/* Top rated products section */}
            <TopRatedProducts />

            {/* Top Reviewed Section */}
            <TopReviewedSection />

            {/* Comparison Tables */}
            <ComparisonTables />

            {/* How It Works */}
            <HowItWorks />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Blog Highlights Section */}
            <BlogHighlights />


            {/* Wait list CTA */}

        </div>
    );
};

export default Home;
