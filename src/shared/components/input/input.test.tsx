import { fireEvent, render, screen } from '@testing-library/react';

import Input from './input';

describe('Input 컴포넌트 단위 테스트', () => {
  test('label이 있는 경우, input과 올바르게 연결되는지 확인', () => {
    render(<Input label="아이디" id="username" />);

    const input = screen.getByLabelText('아이디');
    expect(input).toBeInTheDocument();
  });

  test('아이콘이 있을 때, 아이콘 렌더링과 click 이벤트 확인', () => {
    const mockIcon = <span data-testid="icon">🔍</span>;
    const handleClick = jest.fn();

    render(
      <Input
        label="검색"
        id="search"
        iconProps={{ icon: mockIcon, onIconClick: handleClick }}
      />,
    );

    const icon = screen.getByTestId('icon');

    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('입력 값을 변경하면 input에 값이 반영되는지 확인', async () => {
    render(<Input label="이메일" id="email" />);

    const input = screen.getByLabelText('이메일');

    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(input).toHaveValue('test@example.com');
  });
});
