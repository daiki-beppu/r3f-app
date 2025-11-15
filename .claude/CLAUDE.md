# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo-based React Native application designed to integrate high-performance 3D graphics and UI. The project uses React 19 with experimental features and the new React Native architecture.

**Tech Stack:**
- Expo SDK 54 with React 19.1.0
- React Native 0.81.5 (new architecture enabled)
- TypeScript (strict mode)
- Expo Router for file-based navigation
- React Compiler (experimental)
- Typed routes enabled

**Planned Integrations:**
- React Three Fiber (R3F) for 3D rendering
- @shopify/react-native-skia for high-performance graphics
- hero ui native for UI components
- Zustand for state management

## Development Commands

**Package Manager:** This project uses `bun` as the package manager (bun.lock present)

```bash
# Start development server
bun start              # or: expo start

# Platform-specific launch
bun run android        # Launch on Android
bun run ios           # Launch on iOS
bun run web           # Launch web version

# Linting
bun run lint          # Run ESLint with Expo config

# Reset project to blank template
bun run reset-project # Moves starter code to app-example/
```

## Architecture

### Routing Structure
Uses Expo Router with file-based routing in the `app/` directory:
- `app/_layout.tsx` - Root layout component (Stack navigator)
- `app/index.tsx` - Home screen
- All routes follow the Expo Router conventions

### Path Aliases
The project uses `@/*` as an alias for root-level imports:
```typescript
import { Something } from '@/components/Something'
```

### Planned Architecture Layers

Based on [docs/LEARNING_ROADMAP.md](docs/LEARNING_ROADMAP.md), the project will be organized into:
- **UI Layer**: Uniwind-styled components for lightweight UI
- **3D Layer**: R3F components for 3D scenes
- **Rendering Layer**: Skia Canvas for high-performance rendering
- **State Management**: Zustand stores
- **Theme System**: Tailwind v4 CSS variables for unified theming

Expected module structure:
```
features/   # Feature-based modules
shared/     # Shared utilities and hooks
ui/         # UI components (Uniwind)
3d/         # 3D components (R3F)
```

### Key Configuration Details

**Expo Configuration ([app.json](app.json)):**
- New Architecture enabled (`newArchEnabled: true`)
- React Compiler enabled (`experiments.reactCompiler: true`)
- Typed routes enabled (`experiments.typedRoutes: true`)
- Edge-to-edge on Android (`edgeToEdgeEnabled: true`)
- Custom URI scheme: `r3fapp://`

**TypeScript Configuration:**
- Extends `expo/tsconfig.base`
- Strict mode enabled
- Paths configured for `@/*` alias

## React Native New Architecture

This project uses the new React Native architecture with:
- **JSI (JavaScript Interface)**: Direct JS-to-native communication without the bridge
- **Fabric**: New rendering system for faster UI updates
- **TurboModules**: New native module system
- **Concurrent Features**: React 18+ concurrent rendering capabilities

When working with native modules or third-party libraries, ensure they support the new architecture.

## Integration Guidelines

### 3D and Rendering Integration
When integrating R3F and Skia:
- Keep UI layer (React Native Views) separate from 3D layer (R3F Canvas)
- Use Skia Canvas as the rendering target for R3F instead of WebGL
- Synchronize animations between UI (Reanimated) and 3D (useFrame) using shared values
- Minimize re-renders by using proper memoization and invalidation strategies

### State Synchronization
- Use `react-native-reanimated` (v4.1.1) for UI animations
- Sync Reanimated `useSharedValue` with R3F `useFrame` for coordinated UI-3D animations
- Consider using Zustand for global state that affects both UI and 3D scenes

### Performance Considerations
- Leverage JSI for direct native access in performance-critical code
- Use `react-native-worklets` (0.5.1) for running JS on UI thread
- Optimize 3D scene by controlling frameloop and using invalidation
- Profile with React DevTools and React Native Performance Monitor

## Project Context

This is a learning project following a structured roadmap ([docs/LEARNING_ROADMAP.md](docs/LEARNING_ROADMAP.md)) to master:
1. React Native + Expo + TypeScript fundamentals
2. Uniwind (Tailwind v4) integration
3. Skia 2D rendering basics
4. React Three Fiber 3D concepts
5. R3F × Skia renderer integration
6. Reanimated × R3F synchronization
7. Complete architecture integration

The project is currently in early stages with basic Expo setup. Development notes are maintained in Japanese in [docs/DEV_MEMO.md](docs/DEV_MEMO.md).
