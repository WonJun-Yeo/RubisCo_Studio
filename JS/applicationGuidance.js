$(document).ready(function(e){
    if ($(window).width() < 768) {
        $('.appGuidence-back').css({
            display: "flex",
            justifyContent: "center",
            alignItems : "center",
            position : "fixed",
            backgroundColor : "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100vh",
            zIndex: "1000000000000"
        });
        $('.appGuidence').css({
            width: "50%",
            textAlign : "center",
            backgroundColor : "#ECE9E2",
            fontSize : "20px",
            color: "#111",
            padding : "20px",
            borderRadius : "8px",
            border: "1px solid #A48F75",
            boxShadow: "0 0 10px gray inset"
        });
        $('.appGuidence > img').css({
            width: "100%",
            marginBottom : "15px"
        });
        $('.appGuidence > p').css({
            width: "100%",
            marginBottom : "25px",
            fontFamily: "Nanum Gothic",
            fontWeight: "700"
        });
        $('.store-list').css({
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems : "center"
        });
        $('.store-list-item').css({
            fontSize : "20px",
            cursor: "pointer"
        });
        $('.store-list-item > .fab').css({
            padding: "20px",
            border: "1px solid #A48F75",
            borderRadius : "8px",
            marginBottom: "5px"
        })
    }
});

