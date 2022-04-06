//작성하기 버튼
$('form#answer').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: () => {
          alert('성공');
          location.reload(); //화면 새로고침
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });

 //좋아요 버튼
 $('form.postLike').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: (data) => {
          console.log(data.countNum);
          console.log(data.countNum.likeCountNum);
          alert('성공 2');
          $('p.like_text').removeClass();
          $(this).children('p').addClass('like_text');
          $('p.like_text').text(data.countNum.likeCountNum);
          //console.log('ajax test : 2');
          
          if($(this).children('input[type=submit]').hasClass('check_like')) {
             //해당하는 좋아요 버튼이 check_like 클래스를 가지고 있을 경우
             $(this).children('input[type=submit]').removeClass('check_like');
          } else {
             $(this).children('input[type=submit]').addClass('check_like');
          }
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });
 
 //신고하기 버튼
 $('form.postReport').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: (data) => {
          console.log(data.countNum)
          console.log(data.countNum.reportCountNum);
          alert('성공');
          $('p.report_text').removeClass();
          $(this).children('p').addClass('report_text');
          $('p.report_text').text(data.countNum.reportCountNum);
          //console.log('ajax test : 1');
          //console.log('ajax test : 59');
          
          if($(this).children('input[type=submit]').hasClass('check_report')) {
             //해당하는 신고하기 버튼이 check_like 클래스를 가지고 있을 경우
             $(this).children('input[type=submit]').removeClass('check_report');
          } else {
             $(this).children('input[type=submit]').addClass('check_report');
          }
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });
 
 //내가 쓴 글 버튼
 /*
 $('form.my_thinking').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: (data) => {
          alert('성공');
          //console.log(data);
          //{ThinkingPost [postChoicedOpn=true, postId=59, user=AtoUser(userId=7, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=hing..., postType=T, postRegDate=2022-01-13 14:14:10.564]=CountNum(cnId=426, post=Post(postId=59, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=2, reportCountNum=1), ThinkingPost [postChoicedOpn=true, postId=58, user=AtoUser(userId=7, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=hehehe hyeyuni bavo, postType=T, postRegDate=2022-01-13 14:14:01.446]=CountNum(cnId=427, post=Post(postId=58, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=2, reportCountNum=2), ThinkingPost [postChoicedOpn=false, postId=57, user=AtoUser(userId=7, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=antmsakfdlswl ahfmrpTwl gundae i ru ke juk eu meon algetzi?, postType=T, postRegDate=2022-01-13 14:13:48.965]=CountNum(cnId=326, post=Post(postId=57, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=3, reportCountNum=2), ThinkingPost [postChoicedOpn=true, postId=56, user=AtoUser(userId=7, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=chdnjsk sjsms wjdakf chlrhdi rhakdnj gkdtkd, postType=T, postRegDate=2022-01-13 14:13:16.139]=CountNum(cnId=428, post=Post(postId=56, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=0, reportCountNum=2), ThinkingPost [postChoicedOpn=false, postId=55, user=AtoUser(userId=5, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=보령언니 사랑해요 - 초원, postType=T, postRegDate=2022-01-11 17:52:58.119]=CountNum(cnId=226, post=Post(postId=55, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=1, reportCountNum=2), ThinkingPost [postChoicedOpn=true, postId=50, user=AtoUser(userId=5, userEmail=null, userPasswd=null, userNickname=null, userBirth=null, userGender=, userRegDate=null), postContent=왕질투 초원 ㅡㅡ, postType=T, postRegDate=2022-01-11 17:08:00.71]=CountNum(cnId=224, post=Post(postId=50, user=null, postContent=null, postType=, postRegDate=null), likeCountNum=2, reportCountNum=2)} = data
          location.reload(); //화면 새로고침
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });
 */
 //수정하기 버튼(btn)
 $('input.revise_btn').on('click', function() {
    event.preventDefault();
    $(this).hide();
    console.log("revise_btn 클릭")
    console.log($(this).prev().val());
    
    /*$(this).next().next().unwrap().wrap('<textarea form="answer" maxlength="150" required="required" name="postRContent" rows="7" cols="30"></textarea>');*/
    let post_text = $(this).parent().children('p.thinking_text').text();
    console.log(post_text);
    $(this).parent().children('p.thinking_text').text('');
    
    /*$(this).parent().children('form.revise_thinking').append(
          '<textarea form="answer" maxlength="150" required="required" name="postRContent" rows="7" cols="30">'+post_text+'</textarea>');*/
    $(this).parent().children('form.revise_thinking').children('input[type=submit]').show();
    $(this).parent().children('form.revise_thinking').children('textarea').show();
    //location.reload(); //화면 새로고침
 })
 //수정하기 버튼(submit)
 $('form.revise_thinking').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: (data) => {
          console.log(data)
          alert('수정 성공');
          $(this).hide(); //submit 버튼 hide
          $(this).parent().children('form.revise_thinking').children('textarea').hide();
          $(this).parent().children('input.revise_btn').show();//revise_btn show
          $(this).parent().children('p.thinking_text').text(data.postRContent);
          //location.reload(); //화면 새로고침
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });
 
 //삭제하기 버튼
 $('form.delete_thinking').on('submit', function() {
    event.preventDefault();
    
    $.ajax({
       type: 'POST',
       url: this.action,
       data: $(this).serialize(),
       success: (data) => {
          console.log(data)
          alert('삭제 성공');
          location.reload(); //화면 새로고침
       },error: () => {
          alert('로그인해야 이용하실 수 있습니다!');
       }
    });
 });