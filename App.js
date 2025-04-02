import { AuthStack } from './src/core/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <AuthStack/>
    </AuthProvider>
  );
}