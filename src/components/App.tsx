import { useResponsive } from '../hooks/useResponsive';

function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className={`app ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
      {/* Conditionally render optimized content */}
      {isMobile ? (
        <MobileOptimizedContent />
      ) : (
        <DesktopContent />
      )}
    </div>
  );
} 