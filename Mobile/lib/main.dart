import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:developer' as developer;

class Idea {
  final String message;
  final int likes;
  final int id;

  const Idea({
    required this.message,
    required this.likes,
    required this.id,
  });

  factory Idea.fromJson(Map<String, dynamic> json) {
    return Idea(
      message: json['mMessage'],
      likes: json['mLikes'],
      id: json['Post_ID'],
    );
  }

  Map<String, dynamic> toJson() => {
    'mMessage': message,
    'mLikes': likes,
    'Post_ID': id,
  };

  @override
  String toString() {
    return jsonEncode(this.toJson());
  }
}

Future<List<Idea>> fetchIdeas() async {
  final response = await http.get(Uri.parse('http://10.0.2.2:4567/ideas'));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response, then parse the JSON.
    final List<Idea> returnData = [];
    var res = jsonDecode(response.body);
    print('json decode: $res');

    // returnData = (res['posts']).map( (x) => Idea.fromJson(x) ).toList();
    for (Map<String, dynamic> item in res['posts']) {
      returnData.add(Idea.fromJson(item));
    }

    returnData.sort((a, b) { return a.id.compareTo(b.id); });

    return returnData;
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Did not receive success status code from request.');
  }
}

void putIdea(Idea idea) async {
  print(idea);
  var url = Uri.http('10.0.2.2:4567', 'ideas/${idea.id}');             // using https; http also possible
  var response = await http.put(
                  url, 
                  body: json.encode(idea.toJson()),
                  headers: {});

  print(response.body);
}

void postIdea(String message) async {
  print(message);
  var url = Uri.http('10.0.2.2:4567', 'ideas');             // using https; http also possible
  var response = await http.post(                                   // POST returning Future<Response>
                  url, 
                  body: json.encode({
                    'mMessage': message,
                    'mLikes': 0.toString(),
                  }),
                  headers: {});

  print(response.body);
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Thinking about...',
      theme: ThemeData(
        scaffoldBackgroundColor: const Color.fromARGB(0, 114, 114, 114),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Thinking about...'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _buttonText = "New Thought";
  bool inInputMode = false;
  late Future<List<Idea>> _ideas;
  final _biggerFont = const TextStyle(color: Colors.white, fontSize: 20);
  
  @override
  void initState() {
    super.initState();
    _ideas = fetchIdeas();
  }

  void _retry() {
    setState(() {
      _ideas = fetchIdeas();
    });
  }

  void _toggleTextInput() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      
      if (!inInputMode) {
        // switch into inputMode
        _buttonText = "Post";
      } else {
        // switch out of inputMode
        _buttonText = "New Thought";
      }

      inInputMode = !inInputMode;
      _ideas = fetchIdeas();
    });
  }

  @override
  Widget build(BuildContext context) {
    final textController = TextEditingController();
    var fb = FutureBuilder<List<Idea>>(
      future: _ideas,
      builder: (BuildContext context, AsyncSnapshot<List<Idea>> snapshot) {
        Widget child;

        if (snapshot.hasData) {
          return Scaffold(
            appBar: AppBar(
              backgroundColor: const Color.fromARGB(0, 114, 114, 114),
              title: Text(widget.title, style: const TextStyle(fontSize: 35.0, color: Colors.white)),
            ),

            body: Stack(
              children: <Widget>[
                Container(
                  // column would be better way to do this
                  margin: const EdgeInsets.only(bottom: 60),
                  child: Visibility (
                    visible: !inInputMode,
                    child: ListView.builder(
                      itemCount: snapshot.data!.length,
                      itemBuilder: (BuildContext context, int i) {
                        return ListTile(
                          leading: TextButton(
                            child: Text(
                              snapshot.data![i].likes.toString(),
                              style: _biggerFont,
                            ),
                            onPressed: () {
                              putIdea( Idea(
                                message: snapshot.data![i].message, 
                                likes: snapshot.data![i].likes+1, 
                                id: snapshot.data![i].id
                              ));
                              setState(() {
                                _ideas = fetchIdeas();
                              });
                            }
                          ),
                          // leading: new Icon(Icons.circle),
                          title: Container(
                            padding: const EdgeInsets.all(8.0),
                            margin: const EdgeInsets.only(left: 20.0, right: 20.0),
                            decoration: const BoxDecoration(
                              color: Colors.grey,
                              borderRadius: BorderRadius.all(Radius.circular(20))
                            ),
                            child: Text(
                              snapshot.data![i].message,
                              style: _biggerFont,
                            ),
                          ),
                        );
                    }),
                  ),
                ),                

                Visibility(
                  visible: inInputMode,
                  child: Container(
                    padding: const EdgeInsets.all(8.0),
                    margin: const EdgeInsets.only(left: 20.0, right: 20.0),
                    decoration: const BoxDecoration(
                      color: Colors.grey,
                      borderRadius: BorderRadius.all(Radius.circular(20))
                    ),
                    child: TextField(
                      controller: textController,
                      decoration: const InputDecoration(
                        labelText: 'What\'s on your mind?',
                      ),
                    ),
                  ),
                ),
              ]
            ),
            
            floatingActionButton: TextButton(
              onPressed: () {
                if (_buttonText == "Post") {
                  postIdea(textController.text);
                }
                _toggleTextInput();
              },
              child: Text(_buttonText, style: _biggerFont),
            ), 
          );
        } else if (snapshot.hasError) { // newly added
          child = Text('${snapshot.error}');
        } else {
          child = const CircularProgressIndicator(); //show a loading spinner.
        }
        return child;
      },
    );

    return fb;
  }
}