import { View,  useColorMode } from 'native-base';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/ContextProvider';


const BaseLayout = ({ children }) => {
    const { colorMode } = useContext(SettingsContext);
  return (
    <View bg={colorMode === 'light' ? 'white' : 'black'} flex={1} alignItems={'center'} justifyContent={'center'}>
        {children}
    </View>
  );
};

export default BaseLayout;
