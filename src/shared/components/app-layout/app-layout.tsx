import { Container } from 'react-bootstrap';
import Header from '../header/header';
import { ReactNode } from 'react';

interface AppLayoutProps {
  title?: string;
  content: ReactNode;
}

export default function AppLayout({ title, content }: AppLayoutProps) {
  return (
    <>
      <Header />
      <Container>
        {title && <h3 className="mt-4">{title}</h3>}
        {content}
      </Container>
    </>
  );
}
