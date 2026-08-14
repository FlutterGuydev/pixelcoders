import { Routes, Route, Navigate } from 'react-router-dom';
import { usePlayer } from './context/PlayerContext';
import LoginPage from './components/Auth/LoginPage';
import WorldMap from './components/WorldMap/WorldMap';
import ProfilePage from './components/Profile/ProfilePage';
import LevelUpOverlay from './components/LevelUp/LevelUpOverlay';
import HtmlLevelPage from './components/HtmlTrack/HtmlLevelPage';
import HtmlDungeonViewport from './components/HtmlTrack/HtmlDungeonViewport';
import HtmlBridgeViewport from './components/HtmlTrack/HtmlBridgeViewport';
import HtmlRoomsViewport from './components/HtmlTrack/HtmlRoomsViewport';
import BasicsLevelPage from './components/BasicsTrack/BasicsLevelPage';
import PlaygroundPage from './components/Playground/PlaygroundPage';
import CertificatePage from './components/Exam/CertificatePage';
import { htmlLevel1 } from './data/levels/htmlLevel1';
import { htmlLevel2 } from './data/levels/htmlLevel2';
import { htmlLevel3 } from './data/levels/htmlLevel3';
import { basicsLevel1 } from './data/levels/basicsLevel1';
import { basicsLevel2 } from './data/levels/basicsLevel2';
import { basicsLevel3 } from './data/levels/basicsLevel3';
import { basicsLevel4 } from './data/levels/basicsLevel4';
import { basicsLevel5 } from './data/levels/basicsLevel5';
import { basicsLevel6 } from './data/levels/basicsLevel6';
import { basicsLevel7 } from './data/levels/basicsLevel7';
import { basicsLevel8 } from './data/levels/basicsLevel8';
import { basicsLevel9 } from './data/levels/basicsLevel9';
import { basicsLevel10 } from './data/levels/basicsLevel10';
import { basicsLevel11 } from './data/levels/basicsLevel11';
import { basicsLevel12 } from './data/levels/basicsLevel12';
import { basicsLevel13 } from './data/levels/basicsLevel13';
import { basicsLevel14 } from './data/levels/basicsLevel14';
import { basicsLevel15 } from './data/levels/basicsLevel15';
import { basicsLevel16 } from './data/levels/basicsLevel16';
import { basicsLevel17 } from './data/levels/basicsLevel17';
import { basicsLevel18 } from './data/levels/basicsLevel18';
import { basicsLevel19 } from './data/levels/basicsLevel19';
import { basicsLevel20 } from './data/levels/basicsLevel20';
import { basicsLevel21 } from './data/levels/basicsLevel21';
import { basicsLevel22 } from './data/levels/basicsLevel22';
import { basicsLevel23 } from './data/levels/basicsLevel23';
import { basicsLevel24 } from './data/levels/basicsLevel24';
import { basicsLevel25 } from './data/levels/basicsLevel25';
import { basicsLevel26 } from './data/levels/basicsLevel26';
import { basicsLevel27 } from './data/levels/basicsLevel27';
import { basicsLevel28 } from './data/levels/basicsLevel28';
import { basicsLevel29 } from './data/levels/basicsLevel29';
import { basicsLevel30 } from './data/levels/basicsLevel30';
import { basicsLevel31 } from './data/levels/basicsLevel31';
import { basicsLevel32 } from './data/levels/basicsLevel32';
import { basicsLevel33 } from './data/levels/basicsLevel33';
import { basicsLevel34 } from './data/levels/basicsLevel34';
import { basicsLevel35 } from './data/levels/basicsLevel35';
import { basicsLevel36 } from './data/levels/basicsLevel36';
import { basicsLevel37 } from './data/levels/basicsLevel37';
import { basicsLevel38 } from './data/levels/basicsLevel38';
import { cssLevel1 } from './data/levels/cssLevel1';
import { cssLevel2 } from './data/levels/cssLevel2';
import { cssLevel3 } from './data/levels/cssLevel3';
import { cssLevel4 } from './data/levels/cssLevel4';
import { cssLevel5 } from './data/levels/cssLevel5';
import { cssLevel6 } from './data/levels/cssLevel6';
import { cssLevel7 } from './data/levels/cssLevel7';
import { cssLevel8 } from './data/levels/cssLevel8';
import { cssLevel9 } from './data/levels/cssLevel9';
import { cssLevel10 } from './data/levels/cssLevel10';
import { cssLevel11 } from './data/levels/cssLevel11';
import { cssLevel12 } from './data/levels/cssLevel12';
import { cssLevel13 } from './data/levels/cssLevel13';
import { cssLevel14 } from './data/levels/cssLevel14';
import { cssLevel15 } from './data/levels/cssLevel15';
import { cssLevel16 } from './data/levels/cssLevel16';
import { cssLevel17 } from './data/levels/cssLevel17';
import { cssLevel18 } from './data/levels/cssLevel18';
import { cssLevel19 } from './data/levels/cssLevel19';
import { cssLevel20 } from './data/levels/cssLevel20';
import { cssLevel21 } from './data/levels/cssLevel21';
import { cssLevel22 } from './data/levels/cssLevel22';
import { cssLevel23 } from './data/levels/cssLevel23';
import { cssLevel24 } from './data/levels/cssLevel24';
import { cssLevel25 } from './data/levels/cssLevel25';
import { cssLevel26 } from './data/levels/cssLevel26';
import { cssLevel27 } from './data/levels/cssLevel27';
import { cssLevel28 } from './data/levels/cssLevel28';
import { cssLevel29 } from './data/levels/cssLevel29';
import { cssLevel30 } from './data/levels/cssLevel30';
import { cssLevel31 } from './data/levels/cssLevel31';
import { cssLevel32 } from './data/levels/cssLevel32';
import { cssLevel33 } from './data/levels/cssLevel33';
import { cssLevel34 } from './data/levels/cssLevel34';
import { cssLevel35 } from './data/levels/cssLevel35';
import { cssLevel36 } from './data/levels/cssLevel36';
import { cssLevel37 } from './data/levels/cssLevel37';
import { cssLevel38 } from './data/levels/cssLevel38';

const BASICS_LEVELS = [
  basicsLevel1,
  basicsLevel2,
  basicsLevel3,
  basicsLevel4,
  basicsLevel5,
  basicsLevel6,
  basicsLevel7,
  basicsLevel8,
  basicsLevel9,
  basicsLevel10,
  basicsLevel11,
  basicsLevel12,
  basicsLevel13,
  basicsLevel14,
  basicsLevel15,
  basicsLevel16,
  basicsLevel17,
  basicsLevel18,
  basicsLevel19,
  basicsLevel20,
  basicsLevel21,
  basicsLevel22,
  basicsLevel23,
  basicsLevel24,
  basicsLevel25,
  basicsLevel26,
  basicsLevel27,
  basicsLevel28,
  basicsLevel29,
  basicsLevel30,
  basicsLevel31,
  basicsLevel32,
  basicsLevel33,
  basicsLevel34,
  basicsLevel35,
  basicsLevel36,
  basicsLevel37,
  basicsLevel38,
];

const CSS_BASICS_LEVELS = [
  cssLevel1,
  cssLevel2,
  cssLevel3,
  cssLevel4,
  cssLevel5,
  cssLevel6,
  cssLevel7,
  cssLevel8,
  cssLevel9,
  cssLevel10,
  cssLevel11,
  cssLevel12,
  cssLevel13,
  cssLevel14,
  cssLevel15,
  cssLevel16,
  cssLevel17,
  cssLevel18,
  cssLevel19,
  cssLevel20,
  cssLevel21,
  cssLevel22,
  cssLevel23,
  cssLevel24,
  cssLevel25,
  cssLevel26,
  cssLevel27,
  cssLevel28,
  cssLevel29,
  cssLevel30,
  cssLevel31,
  cssLevel32,
  cssLevel33,
  cssLevel34,
  cssLevel35,
  cssLevel36,
  cssLevel37,
  cssLevel38,
];

const HTML_LEVELS = [
  { level: htmlLevel1, Viewport: HtmlDungeonViewport },
  { level: htmlLevel2, Viewport: HtmlBridgeViewport },
  { level: htmlLevel3, Viewport: HtmlRoomsViewport },
];

function RequireAuth({ children }) {
  const { player } = usePlayer();
  if (!player) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/map"
        element={
          <RequireAuth>
            <WorldMap />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route
        path="/playground"
        element={
          <RequireAuth>
            <PlaygroundPage />
          </RequireAuth>
        }
      />
      <Route
        path="/level-up"
        element={
          <RequireAuth>
            <LevelUpOverlay />
          </RequireAuth>
        }
      />
      <Route
        path="/certificate"
        element={
          <RequireAuth>
            <CertificatePage />
          </RequireAuth>
        }
      />
      {HTML_LEVELS.map(({ level, Viewport }) => (
        <Route
          key={level.id}
          path={`/levels/${level.id}`}
          element={
            <RequireAuth>
              <HtmlLevelPage level={level} Viewport={Viewport} />
            </RequireAuth>
          }
        />
      ))}
      {BASICS_LEVELS.map((level) => (
        <Route
          key={level.id}
          path={`/levels/${level.id}`}
          element={
            <RequireAuth>
              <BasicsLevelPage level={level} />
            </RequireAuth>
          }
        />
      ))}
      {CSS_BASICS_LEVELS.map((level) => (
        <Route
          key={level.id}
          path={`/levels/${level.id}`}
          element={
            <RequireAuth>
              <BasicsLevelPage level={level} />
            </RequireAuth>
          }
        />
      ))}
      <Route path="/" element={<Navigate to="/map" replace />} />
      <Route path="*" element={<Navigate to="/map" replace />} />
    </Routes>
  );
}
