# RTL이란?

React Testing Lib으로 컴포넌트가 개발자의 의도대로 잘 나타나는지를 Test할 수 있는 패키지이다. CRA를 이용해 프로젝트를 생성시 기본적인 Testing Package가 설치되어 있다.

## Jest와 RTL

Jest는 테스트, 스냅샷 비교, mocking, coverage등을 구축할 수 있는 API를 제공하고 테스트를 찾아 실행하며, 테스트가 통과하는 지 검사한다.

RTL은 React Component를 테스트하기 위해 제작된 Package이다. 각각의 구성요소에 대한 사용사 상호작용을 테스트하고, UI가 올바르게 작동하는 지 확인할 수 있다.

## TDD란?

Test Driven Devlopement로 기존의 프로세스 **설계 -> 개발 -> 테스트 -> 설계** 와 달리 **설계 <-> 테스트 -> 개발** 와 같이 설계와 테스트를 먼저 작성 후 코드를 개발하는 개발 프로세스이다.
