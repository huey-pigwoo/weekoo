import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error?.message || '未知錯誤');
    console.error('Error Info:', errorInfo?.componentStack || '無堆疊信息');
  }

  public render() {
    if (this.state.hasError) {
      return <h1>抱歉，出現了錯誤。</h1>;
    }

    return this.props.children;
  }
} 