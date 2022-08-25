import 'package:flutter/material.dart';
import 'package:mobile_and_desktop/utils/colors.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'whatsapp mobile and desktop',
        theme: ThemeData.dark().copyWith(
          backgroundColor: backgroundColor,
        ),
        home: const Scaffold(
          body: Center(
              child: Text(
            "Whatsapp web and mobile",
            style: TextStyle(fontSize: 30, color: Colors.white),
          )),
        ));
  }
}
