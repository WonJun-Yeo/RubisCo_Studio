$(function(){
    $('.draggable').draggable({
        cusor: "move",
        stack: ".draggable",
        opacity: 0.7
    });

    $('.draggable').on("dragstart", function(){
        $('.guided-arrow').css({
            display : "flex"
        });
        $('.fa-long-arrow-alt-down').css({
            backgroundColor: "transparent"
        });
        $('.guided-arrow > p').css({
            backgroundColor: "transparent"
        });
    });

    $('.draggable').on("dragstop", function(){
        //console.log("드래그끝");
        $(this).css({
            top : "0px",
            left: "0px"
        });
        $('.guided-arrow').css({
            display : "none"
        })
    })

    $('.drop-box').droppable({
        drop : function(evt, ui) {
            // 드랍요소 이미지 경로
            let isrc = ui.draggable.find("img").attr("src");
            // 드랍요소 제목
            let dtxt = ui.draggable.find("p").text();

            $(this).css({
                justifyContent: "start"
            })

            // 드랍이벤트 htrml 골격
            let dropHtml =
            `<div class="droped-elements">
                <button class="remove-bt"><i class="fas fa-times"></i></button>
                <img src="` + isrc + `" alt="" class="droped-img">
                <div class="droped-info">
                    <p class="droped-img-name">` + dtxt + `</p>
                    <div class="pd-checkBox">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">paper</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">envelop</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                            <label class="form-check-label" for="inlineCheckbox3">album</label>
                        </div>
                    </div>
                    <span class="price">1000</span>
                    <div class="pd-num">
                        <button type="button" class="plus-bt"><i class="fas fa-plus"></i></button>
                        <p>1</p>
                        <button type="button" class="minus-bt"><i class="fas fa-minus"></i></button>
                    </div>
                </div>
            </div>`;
            
            // 기본 htrml 골격
            let defaultHtml = '<p>DROP BOX</p>';
            
            // html 기본형식 삽입
            if($(this).children('.droped-elements').length == 0) {
                $(this).html(
                    dropHtml
                );
                console.log($(this).children('.droped-elements').length);
            } else {
                $(this).append(
                    dropHtml
                );
                console.log($(this).children('.droped-elements').length);
            }

            // remove 버튼
           
            $('.remove-bt').on("click", function(){
                $(this).parents('.droped-elements').remove();

                if($('.drop-box').children('.droped-elements').length == 0) {
                    $('.drop-box').html(
                        defaultHtml
                    );

                    $('.drop-box').css({
                        justifyContent: "center"
                    })

                    console.log($(this).children('.droped-elements').length);
                }
            });

            // 갯수 버튼
            let pdNum = 1;
            let pdPrice = 1000;

            $('.plus-bt').on("click", function() {
                pdNum += 1;
                pdPrice = 1000 * pdNum;
                $(this).next().html(
                    pdNum
                );
                
                $(this).parents('.pd-num').prev('span').html(
                    pdPrice
                )
            });

            $('.minus-bt').on("click", function() {
                if(pdNum > 1) {
                    pdNum -= 1;
                    pdPrice = 1000 * pdNum;
                    
                    $(this).prev().html(
                        pdNum
                    );

                    $(this).parents('.pd-num').prev('span').html(
                        pdPrice
                    )
                }
            });

            // reset 버튼
            $('.reset-bt').on("click", function(){
                $('.drop-box').html(
                    defaultHtml
                );
                $('.drop-box').css({
                    justifyContent: "center"
                })
            });

            // storage 버튼
            $('.bt-s').on("click", function(){
                if($('.drop-box').children('.droped-elements').length != 0) {
                    $('.drop-box').html(
                        defaultHtml
                    );
                    $('.drop-box').css({
                        justifyContent: "center"
                    });
                    $('.arlert').show().delay(2000).hide(1);
                } 
            });





        }
    })
})

