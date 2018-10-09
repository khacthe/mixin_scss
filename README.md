# Minxin trong scss và styled component reactjs

**Mixin** có thể hiểu là function trong scss, khái niệm không còn xa lạ khi ta chuyển từ viết css thuần túy sang sử dụng Scss hay Less, việc sử dụng nó giúp tối ưu code cũng như tiết kiệm rất nhiều trong style web nhưng đôi lúc ta chưa tận dụng triệt để những lợi nó mang lại.
 Mixin không chỉ hỗ trợ trong viết Scss, Less mà nó còn được sử dụng trong styled-component của Reactjs nên việc xây dựng một file mixin là rất cần thiết khi xây dựng base.

- Ở đây ta có 2 file tổng hợp một số mixin hay sử dụng, 1 dành cho scss và file còn lại dùng trong styled-component của Reactjs.

# Mixin sử dụng trong scss (mixin.scss)

- Mixin keyframes
 ```bash
	@include keyframes(bg_color) {
	  0% {
	    background-color: #fff;
	  }
	  50% {
	    background-color: #fff;
	  }
	  100% {
	    background-color: #fff;
	  } 
	}


 ```

- animation mixin

 ```bash
   .class_name{
     ....
     @include animation(bg_color 1s); //bg_color là keyframes
   }

//result

 .class_name {
  ....
  -webkit-animation: bg_color 1s;
  -moz-animation: bg_color 1s;
  -ms-animation: bg_color 1s;
  -o-animation: bg_color 1s;
  animation: bg_color 1s;
}

 ```

- border-radius mixin

 ```bash
   .class_name{
     ....
     @include border-radius(5px);
   }

// result

  .class_name {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
  }


 ```

- transform mixin
 ```bash
   .class_name{
     ....
     @include transform(translate(-50%, -50%));
   }

// result

  .class_name {

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
 ```

- triangle mixin

 ```bash
   .class_name{
     ....
     @include transform(translate(-50%, -50%));
   }
 ```

- pseudo mixin

 ```bash
   .class_name{
     ....
     &:after {
	@include pseudo;
     }
   }

// Result

.class_name:after {
  content: "";
  display: block;
  position: absolute;
}
 ```
- triangle mixin
 ```bash
   .class_name{
     @include triangle(#000, down, 50px, absolute);
   }

// Result

.a {

  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid #000;
  margin-top: -20px;

}
 ```
- Placeholders mixin

 ```bash
   input{
     @include input-placeholder{
	....
      color: red;
    }
   }

// Result

input::-webkit-input-placeholder {
  color: red;
}

 ```

# Mixin trong styled component Reactjs

- 

- Media responsive mixin

 ```bash
   const Header = styled.div`
     font-size: 14px;
     ${ media.tablet`
      font-size: 20px;
    `}
  `;

 ```
- truncate mixin
 ```bash
   const Content = styled.div`
     ....
     ${ truncate('250px') }
  `;
 ```
- transform mixin
 ```bash
   const Footer = styled.div`
     ....
     ${ transform('rotate(45deg)') }
  `;
 ```

- border-radius mixin

 ```bash
   const Box = styled.div`
     ....
     ${ radius('5px') }
  `;
 ```







