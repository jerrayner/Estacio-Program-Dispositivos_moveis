import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Animated, Keyboard } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

interface BuysProps {
  id: number;
  name: string;
  completed: boolean;
}

export default function Index() {
  const [buys, setBuys] = useState<BuysProps[]>([]);
  const [items, setItems] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  function saveItem() {
    if(items.trim()) {
      const newId = buys.length > 0 ? Math.max(...buys.map(item => item.id)) + 1 : 1;
      setBuys([...buys, {id: newId, name: items, completed: false}]);
      setItems("");
      setPopupMessage('Item adicionado');
      setShowPopup(true);
      Keyboard.dismiss();
      setTimeout(() => setShowPopup(false), 3000);
    }
  }

  function toggleCompleted(id: number) {
    const updatedBuys = buys.map((item) =>
      item.id === id ? {...item, completed: !item.completed} : item);
    setBuys(updatedBuys);
  }

  function deleteItem(id: number) {
    const filteredBuys = buys.filter(item => item.id !== id);
    setBuys(filteredBuys);
    setPopupMessage('O item foi removido da lista');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras da semana</Text>

      <TextInput
         style={styles.input}
         placeholder="Adicione um novo item"
         placeholderTextColor="#9CA3AF"
         value={items}
         onChangeText={setItems}
      />
      <TouchableOpacity onPress={saveItem} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar item</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {buys.map((item) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.cardItem}>
              <Pressable onPress={() => toggleCompleted(item.id)}>
                {item.completed ? (
                  <MaterialIcons
                    name="check-box"
                    size={20}
                    color="#12A5BC" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={20}
                    color="#D1D5D8" />
                )}
              </Pressable>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <AntDesign name="delete" size={20} color="#D1D5D8" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {showPopup && (
        <View style={[
          styles.popup, 
          { backgroundColor: popupMessage === 'Item adicionado' ? '#12A5BC' : '#A30C0C' }
        ]}>
          <Text style={styles.popupText}>{popupMessage}</Text>
          <TouchableOpacity onPress={() => setShowPopup(false)}>
            <AntDesign name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFFFF",
    paddingHorizontal: 30,
    paddingTop: 100,
    alignItems: "center",
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 45,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    width: "100%",
    height: 44,
    backgroundColor: "#12A5BC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 57,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 15,
    paddingHorizontal: 20,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
  },  
  itemText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#374151",
  },
  cardContainer: {
    width: "100%",
    gap: 10,
  },
  popup: {
    position: 'absolute',
    bottom: 20,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popupText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'semibold',
  },
});