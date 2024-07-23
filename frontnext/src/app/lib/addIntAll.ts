이 파일은 값을 합산하기 기능을 내보내기 위해 만들어졌습니다.
이 파일은 타입스크립트로 작성됩니다. 엄격하게 타입을 지정해야합니다.
이 기능은 tsx파일의 모듈로 사용될 수 있습니다.
이 기능은 타입지정에 인터페이스를 사용합니다.
이 파일은 해당 함수를 임포트하여 사용합니다.
`interface StringToNumberConverter {
  (input: string): number;
}

// 함수 구현
const extractNumbers: StringToNumberConverter = (input: string): number => {
  // 문자열에서 숫자만 추출
  const numbersOnly = input.replace(/\D/g, '');
  // 정수로 변환하여 반환
  return parseInt(numbersOnly, 10);
};

// 함수 익스포트
export default extractNumbers;
`
이 함수의 이름은 우선적으로 익스트랙이라고 부르겠습니다.

값을 합산하는 기능은 지정된 한 변수 혹은 배열을 매개변수로 받습니다.
고로 변수를 받을 때와, 배열을 매개변수를 받을 때 두가지 경우를 상정하여 각각 두개의 함수로 제작해야합니다.
변수를 받을 경우, 먼저 전체의 합계 값을 담을 변수(이하'합산변수')를 선언합니다. 해당 변수(매개변수로 받은 변수)에서 특정 키 여기서는 '프라이스'라고 하겠습니다. '프라이스'의 값을 배열로 렉시컬환경에서 변수에 할당한 뒤, 
해당 변수에 반복문을 사용하여 모든 값을 조회하면서 합산변수에 +=연산자를 사용합니다.
반복문은 이와같은 형태를 띄게 될 것입니다.

포(아이는 0, 아이는 프라이스의값의배열의길이보다 작다, 아이++){
  합산변수 += 익스트랙(프라이스값의배열[아이])
}

이후  모든 반복문이 실행된 합산변수를 가공합니다. 합산변수가 가격의 형태로 가공해야합니다. 예를들어 값이 888112234가 나왔다면, 뒤에서부터 3글자마자 ,를 추가합니다.
888,112,234처럼 추가하면 됩니다. 그리고 뒤에 '원'이란 문자열을 붙입니다.
즉 리턴은 `888,112,234 원`이 될 것입니다.


배열을 매개변수로 받는 경우를 상정해보겠습니다.
변수를 할당받았을 때와 마찬가지로, 합산변수를 선언합니다.
반복문을 통해 매개변수의 모든 배열을 순회하며 익스트랙을 사용하여 정수로 변환한 뒤 합산변수에 적재합니다.
이후 합산변수를 반환합니다.